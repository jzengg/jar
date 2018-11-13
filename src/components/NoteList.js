import React from 'react';


class NoteList extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }

}

export default NoteList
