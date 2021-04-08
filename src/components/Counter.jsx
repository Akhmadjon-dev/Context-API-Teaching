import React, { Component } from 'react'
// import { ContextConsumer } from '../store/context'
import Context from '../store/context'



export default class Counter extends Component {
  static contextType = Context


  render() {
    return (
      <div>
        {this.context.name}
      </div>
    )
  }
}
