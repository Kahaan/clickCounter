import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Abc from './Abc'

class App extends Component {
  constructor(){
    super()
    this.state = {count:1, previous:[]}
    this.click = this.click.bind(this)
    this.reset = this.reset.bind(this)
  }

  click(event){
    event.preventDefault()
    this.setState({count: this.state.count + 2})
  }

  reset(event){
    event.preventDefault()
    const previous = this.state.previous
    previous.push(this.state.count)
    this.setState({count: 0, previous:previous})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.click}>CLick me!</button>
        <button onClick={this.reset}>Reset</button>
        <p className="p">{this.state.count}</p>
      </div>
    );
  }
}

export default App;
