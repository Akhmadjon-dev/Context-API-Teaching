import React, { Component } from 'react'
import Counter from './components/Counters';
import Navbar from './components/Navbar';
import {UserContextProvider} from './context/user'


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


export default class App extends Component {
  state ={
    counters: [
      {value:0, id:1},
      
    ],
    user: {name: "Ahmadjon", age: 22, phone: 9999432939,}
  }
  setData = (user) => {
    this.setState({user: {...this.state.user, ...user}})
  }


  render() {
    const {user} = this.state
    return (
       <UserContextProvider value={{user, setData:this.setData}}>
          <div>           
            <h3>welcome to react</h3>
            <Navbar />
            <Counter />
          </div>
       </UserContextProvider>
    )
  }
}
