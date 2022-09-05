import React from 'react';
import store from '../Redux/store';
import { addCounter,reduceCounter } from '../Redux/action';

const Counter = () => {
    const [state, setState ] = React.useState(0)
    const {counter} = store.getState();
    const {dispatch}= store;

    const handleAdd = () => { 
        dispatch(addCounter(1));
        setState((prev)=> prev +1);
    }

    const handleReduce = () => {
        dispatch(reduceCounter(1));
        setState((prev)=> prev +1);
    }
 
  return (
    <div>
        <h1>count: {counter}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}

export default Counter