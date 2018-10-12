import React from 'react';

class ItemList extends React.Component {

  render () {
    let items = this.props.items

    return (
      <ul>
        {
          items.map((item) =>
          <li key={item.id}>
            {item.text}
          </li>
        )
      }
    </ul>
  )
}


}

export default ItemList;
