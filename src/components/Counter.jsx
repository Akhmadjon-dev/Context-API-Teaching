import React, { Component } from 'react'
import { UserContextConsumer } from '../context/user'



export default class Counter extends Component {
  render() {
    return (
      <UserContextConsumer>
        {(props) => (<div>
            <h3>Welcome child component</h3>
            User name is {props.name}
        </div>)}
      </UserContextConsumer>
    )
  }
}
