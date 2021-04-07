import React, { Component } from 'react'
import UserContext from '../context/user';

export default class Navbar extends Component {
    static contextType = UserContext


  render() {
      console.log(this.context, 'navbar calling context');
        return (
        <>
            navbar
        </>
        )
  }
}
