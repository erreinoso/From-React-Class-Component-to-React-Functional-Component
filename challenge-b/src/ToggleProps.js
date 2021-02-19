import './App.css';
import React from 'react';

//APP CREATED WITH PROPS (CLASS)
class ToggleProps extends React.Component {
  constructor(props) {
    super(props);
    this.state ={text : "ON"}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let text = this.state.text === "ON" ? "OFF" : "ON"
    this.setState({text :text })
  }

  render() {
    return (
      <div>
        <h1>Button created with props:</h1>
        <button style={{color:"blue"}} onClick={this.handleClick}>{this.state.text}</button>
      </div>
      );
  }
}


export default ToggleProps;