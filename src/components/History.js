import React from 'react'

import NoteList from './NoteList'

class History extends React.Component {

  render() {
    return (
    <div>
      <h2> History - {this.props.filter}</h2>
      <NoteList notes={this.props.notes} />
      <button onClick={this.props.setToday}> Today </button>
      <button onClick={this.props.setYesterday}> Yesterday </button>
    </div>

    )
  }

}

export default History;
