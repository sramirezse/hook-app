import { useState } from 'react';

export const useCounter = (iState = 10) => {
    const [state, setState] = useState(iState);

    const increment = () => {
        setState(state + 1);
    }

    const decrement = () => {
        setState(state - 1);
    }
    return {
        state,
        increment,
        decrement
    };
}
