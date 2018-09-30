import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Abc from './Abc'

class App extends Component {
  constructor(){
    super()
    this.state = {count:1}
    this.click = this.click.bind(this)
  }

  click(event){
    event.preventDefault()
    this.setState({count: this.state.count + 2})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.click}>CLick me!</button>
        {this.state.count}
      </div>
    );
  }
}

export default App;
