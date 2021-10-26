import { useState } from 'react';

export const useCounter = (iState = 10) => {
    const [state, setState] = useState(iState);

    const increment = (factor = 2) => {
        setState(state + factor);
    }

    const decrement = (factor = 2) => {
        setState(state - factor);
    }
    const restablecer = () => {
        setState(iState);
    }
    return {
        state,
        increment,
        decrement,restablecer
    };
}
