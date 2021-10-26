import React,{useState} from 'react'
import './counter.css'
export const CounterApp = () => {
    const [state, setState] = useState({
        counter1:100,
        counter2:200,
        counter3:300
    });
    const {counter1, counter2} = state;
    return (
        <div>
            <h1> Counter : {counter1} </h1>
            <h1> Counter : {counter2} </h1>
            <hr/>
            <button 
                className="btn btn-primary" 
                onClick={()=>{
                    setState({
                        ...state,
                        counter1: counter1+1
                    });
                }}
            > Agregar 
            </button>
        </div>
    )
}
