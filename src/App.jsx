import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counters';
import Navbar from './components/Navbar';


export default class App extends Component {
  state ={
    counters: [
      {value:0, id:1},
      
    ]
  }
  
  render() {
    return (
        <div>
           
            <h3>welcome to react</h3>

            <Navbar />
            <Counter />
        </div>
    )
  }
}
