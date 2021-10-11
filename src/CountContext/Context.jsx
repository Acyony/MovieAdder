import React, { useState } from "react";

// 1 - Step

export const myContext = React.createContext();

// 2 - Step: Create the provider

export default function MyProvider({ children }) {
  const [state, setState] = useState({ count: 0 });

  function increment() {
    setState({ count: state.count + 1 });
  }

  function decrement() {
    setState({ count: state.count - 1 });
  }

  // 3 - Step:
  return (
    <myContext.Provider
      value={{ state, increment, decrement }}
    >
        {children}
    </myContext.Provider>
  );
}
