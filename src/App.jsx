import React, { Component } from 'react'
import { ContextProvider } from './store/context'
import Navbar from './components/Navbar.jsx';
import Counter from './components/Counter.jsx';


export default class App extends Component {
  state= {
    user: {name: "ahmadjon", age: 22},
    
  }
  render() {
    return (
      <ContextProvider value={this.state.user}>
        <Navbar />
        <Counter />
      </ContextProvider>
    )
  }
}
