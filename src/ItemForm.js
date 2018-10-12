import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem({ text: this.state.value, user_id: this.props.user_id, created_at: new Date() })
    this.setState({value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );

  }
}
export default ItemForm;
