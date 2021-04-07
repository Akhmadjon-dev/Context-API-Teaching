import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Navbar from './components/Navbar';
// import Counters from './components/Counters';

export default class App extends Component {
  state ={
    counters: [
      {value:0, id:1},
      {value:0, id:2},
      {value:0, id:3},
      {value:0, id:4},
    ]
  }
  // increment =(id) => {
  //   let{counters} = this.state;
  //   let res = counters.filter(item => item.id === id)
  //   console.log(res);
  //   // this.setState({value: this.state.value + 1})
  // }
  // decrement = (id) => {
  //   // this.setState({value : this.state.value - 1})
  //   console.log('object');
  // }
  // delete = (id) => {
  //   // let counters = this.state.counters.filter(item => item.id !== id)
  //   // this.setState({counters})
  //   console.log('del');
  // }
  render() {
    return (
        <div>
            {/* <Navbar total={counters.filter(c => c.value > 0).length}/>
            <Counters 
            delete={this.delete} 
            increment={this.increment} 
            decrement={this.decrement} 
            counters={counters}/> */}
            <h3>welcome to react</h3>
        </div>
    )
  }
}
