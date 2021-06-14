import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchCopy = {};
    for (let i in actions) {
      dispatchCopy[i] = actions[i](dispatch);
    }
    return (
      <Context.Provider value={{state: state, ...dispatchCopy}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context, Provider};
};
