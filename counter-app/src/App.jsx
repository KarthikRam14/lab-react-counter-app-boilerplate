import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()

    this.state = {
      count: 0
    }
  }

  increment(){
    this.setState((prevState) => ({
      count: prevState.count + 1
    }),
      () => {
        console.log(this.state.count)
      }
    )
  }

  decrement(){
    this.setState((prevState) => ({
      count: prevState.count - 1
    }),
      () => {
        console.log(this.state.count)
      }
    )
  }

  reset(){
    this.setState((prevState)=>({
      count: 0
    }),
      () =>  {
        console.log('reset', this.state.count)
      }
    )
  }  


  render(){
    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}
