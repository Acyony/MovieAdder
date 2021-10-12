import React, { useReducer, createContext } from "react";

export const myContext = createContext();

const reducer = (state1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state1, count: state1.count + 1, message: action.payload };
    case "DECREMENT":
      return { ...state1, count: state1.count - 1, message: action.payload };

    case "INPUT_DATA": {
      return { ...state1, name: action.payload };
    }
    default:
      return state1;
  }
};

export default function MyProvider(props) {
  const initialState = { count: 0 };

  //! dispatch is a method dispatch({}), the object is called action

  //! action is object with two para {type:"ADD_MOVIE"  , payload:new data}

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
}
