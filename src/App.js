import React, {Component} from 'react'
import Count from './Count'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {count: 0, previous: []}
    this.increment = this.increment.bind(this)
    this.list = this.list.bind(this)
  }

  increment(event){
    event.preventDefault()
    this.setState({count: this.state.count + 1})
  }

  list(event){
    event.preventDefault()
    const previous = this.state.previous
    previous.push(this.state.count)
    this.setState({count:0, previous:previous})
  }

  render (){
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.list}>List previous counts</button>
        <p>{this.state.count}</p>
        <Count previous = {this.state.previous} />
      </div>
    );
  }
}

export default App;
