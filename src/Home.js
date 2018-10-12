import React from 'react'

import ItemForm from './ItemForm'
import ItemList from './ItemList'


class Home extends React.Component {
  render() {
    return (
      <div>
        <h2> Home </h2>
        <ItemList items={this.props.db} />

        <ItemForm addItem={this.props.addItem} userId={this.props.user_id} />
      </div>
    )
  }
}

export default Home
