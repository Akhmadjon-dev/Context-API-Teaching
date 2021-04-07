import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


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
        </div>
    )
  }
}
