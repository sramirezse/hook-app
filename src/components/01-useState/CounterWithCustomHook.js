import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state, increment, decrement} = useCounter();
    return (
        <div>
            <h1>Counter with hook: {state}  </h1>  
            <button 
                className="btn btn-primary" 
               
            > +1 
            </button>    
            <button 
                className="btn btn-danger" 
               
            > -1 
            </button>    
        </div>
    )
}
