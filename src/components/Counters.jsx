import React, { Component } from 'react'
import Counter from './Counter';
import UserContext from '../context/user'


export default class Counters extends Component {
  static contextType = UserContext;


  state = {
    name: ''
  }

  inputHandler = (e)=> {
    this.setState({[e.target.name] : e.target.value})
  }

  formHandler = (e)=> {
    e.preventDefault()
    this.context.setData({name: this.state.name})
  }
  
  render() {
    return (
      <>
        <Counter />

        <form onSubmit={this.formHandler}>
          <input name="name" onChange={this.inputHandler} />
          <button>Send</button>
        </form>
      </>
    )
  }
}
