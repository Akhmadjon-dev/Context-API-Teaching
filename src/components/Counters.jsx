
import Counter from './Counter';
const Counters = props => {
    console.log('counters');
    return (
     <div className="container">
       {props.counters.map(item => (
           <Counter 
           onDel={props.delete} 
           key={item.id} 
           counter={item} 
           onDec={props.decrement} 
           onInc={props.increment}/>
       ))}
     </div>
    )
  }

  export default Counters
