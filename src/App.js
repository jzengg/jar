import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import History from './History'
import './App.css';


let id = 0
let t = new Date()
let yest = new Date(t.setDate(t.getDate() - 1))

let db = [
  {
    id: 12,
    text: 'going to the library',
    created_at: yest,
    user_id: 1
  }
]
let user_id = 1

class App extends Component {
  constructor(props) {
    super(props)
    let userItems = db.filter( (item) => {
      return item.user_id === user_id
    })
    this.state = ({
      db: userItems,
      history: this.getYesterday(userItems),
      historyFilter: 'Yesterday'
    })

    this.addItem = this.addItem.bind(this)
    this.setYesterday = this.setYesterday.bind(this)
    this.setToday = this.setToday.bind(this)

  }

  // Adds an item to db
  addItem ({ text, created_at } ) {
    let prevDb = this.state.db
    let newItem = { text, created_at,  id: id++ }
    let newDb = [...prevDb, newItem]
    this.setState({ db: newDb })
  }

  setHistory(items, filter) {
    this.setState({
      history: items,
      historyFilter: filter
    })
  }

  getYesterday(items) {
    let today = new Date();
    let yesterday = new Date(today.setDate(today.getDate() - 1))
    return items.filter( (item) => {
      return item.created_at.toDateString() === yesterday.toDateString()
    })
  }

  setYesterday() {
    this.setHistory(this.getYesterday(this.state.db), 'Yesterday')
  }

  getToday(items) {
    let today = new Date();
    return items.filter( (item) => {
      return item.created_at.toDateString() === today.toDateString()
    })
  }

  setToday() {
    this.setHistory(this.getToday(this.state.db), 'Today')
  }

  getLastWeek(items) {

  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
          </ul>

          <hr />

          <Route exact path='/' render={ (props) =>
              (<Home db={this.getToday(this.state.db)} addItem={this.addItem} userId={user_id} />)
            } />
          <Route path='/history' render= { (props) => (
              <History items={this.state.history} filter={this.state.historyFilter} setToday={this.setToday} setYesterday={this.setYesterday} />
            )} />

      </div>



    </Router>
    );
  }
}

export default App;
