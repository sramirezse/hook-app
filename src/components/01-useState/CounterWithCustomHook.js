import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state, increment, decrement, restablecer} = useCounter();
    return (
        <div>
            <h1>Counter with hook: {state}  </h1>  
            <button 
                className="btn btn-primary" 
                onClick={()=>increment(3)}
            > incrementar
            </button>    
            <button 
                className="btn btn-success" 
                onClick={()=>restablecer()}
            > decrementar 
            </button>    
            <button 
                className="btn btn-danger" 
                onClick={()=>decrement(3)}
            > decrementar 
            </button>    
        </div>
    )
}
