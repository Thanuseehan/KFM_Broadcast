import { createContext } from 'react';

export const AppContext = createContext();  // ✅ Create the context

export const AppContextProvider = (props) => {

  const value = {
   
    
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}  