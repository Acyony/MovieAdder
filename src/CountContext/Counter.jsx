import React, {useContext} from 'react';
import { myContext } from './Context.jsx';

export default function Counter() {
    const {state, increment, decrement} = useContext(myContext);

    return( 
        <div>
            {state.count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}