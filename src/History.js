import React from 'react'

import ItemList from './ItemList'

class History extends React.Component {

  render() {
    return (
    <div>
      <h2> History - {this.props.filter}</h2>
      <ItemList items={this.props.items} />
      <button onClick={this.props.setToday}> Today </button>
      <button onClick={this.props.setYesterday}> Yesterday </button>
    </div>

    )
  }

}

export default History;
