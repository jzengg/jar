import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'
import * as bcrypt from 'bcryptjs'
import * as validator from 'validator'

interface User {
  id: string
}

interface EventData {
  email: string
  password: string
}

const SALT_ROUNDS = 10

export default async (event: FunctionEvent<EventData>) => {
  console.log(event)

  try {
    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const { email, password } = event.data

    if (!validator.isEmail(email)) {
      return { error: {
        message: "Please enter a valid email",
        debugMessage: "Invalid email"
      } }
    }

    // check if user exists already
    const userExists: boolean = await getUser(api, email)
      .then(r => r.User !== null)
    if (userExists) {
      return { error: {
        message: "Email already in use",
        debugMessage: "Email exists"
      } }    }

    // create password hash
    const salt = bcrypt.genSaltSync(SALT_ROUNDS)
    const hash = await bcrypt.hash(password, salt)

    // create new user
    const userId = await createGraphcoolUser(api, email, hash)

    // generate node token for new User node
    const token = await graphcool.generateNodeToken(userId, 'User')

    // create default jars
    let gladJar = await createDefaultJar(api, userId, 'Glad Jar', "Things you're glad about.")
    let lookingForwardJar = await createDefaultJar(api, userId, 'Looking Forward Jar', "Things you're looking forward to.")


    return { data: { id: userId, token } }
  } catch (e) {
    console.log(e)
    return { error: {
      message: "An unexpected error occurred during signup",
      debugMessage: "Server error, check function logs for signup"
    } }  }
}

async function createDefaultJar(api: GraphQLClient, ownerId: string, name: string, description: string): Promise<{ Jar }> {
  // Create mutation
  const mutation = `
    mutation createDefaultJar($description: String, $name: String!, $ownerId: ID!) {
      createJar(
        name: $name,
        description: $description,
        ownerId: $ownerId
      ) {
        id
      }
    }
  `
  return api.request<{ Jar }>(mutation, { ownerId, name, description })
}

async function getUser(api: GraphQLClient, email: string): Promise<{ User }> {
  const query = `
    query getUser($email: String!) {
      User(email: $email) {
        id
      }
    }
  `

  const variables = {
    email,
  }

  return api.request<{ User }>(query, variables)
}

async function createGraphcoolUser(api: GraphQLClient, email: string, password: string): Promise<string> {
  const mutation = `
    mutation createGraphcoolUser($email: String!, $password: String!) {
      createUser(
        email: $email,
        password: $password
      ) {
        id
      }
    }
  `

  const variables = {
    email,
    password: password,
  }

  return api.request<{ createUser: User }>(mutation, variables)
    .then(r => r.createUser.id)
}
