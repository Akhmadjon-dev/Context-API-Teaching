
 const Counter = (props) =>{
    console.log('counter', props.counter);
        return (
            < div className="row" style={{maxWidth:"260px"}}>
                <div className="col m-2">
                   <div className="badge badge-secondary badge-pill">
                        {props.counter.value}
                   </div>
                </div>
                <div className="col d-flex justify-content-center" style={{ marginBottom: "10px"}}>
                    <div className="col">
                        <button onClick={props.onInc(props.counter)} className="btn btn-primary ">+</button>
                    </div>
                    <div className="col">
                        <button onClick={props.onDec(props.counter)} className="btn btn-warning ">-</button>
                    </div>
                    <div className="col">
                        <button onClick={props.onDel(props.counter)} className="btn btn-secondary "> Delete </button>
                    </div>
                </div>
            </div>
           
        )
    }

export default Counter