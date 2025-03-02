import { createContext, useState } from 'react';

export const AppContext = createContext();  // ✅ Corrected context name

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(null);  // ✅ Set default as `null` instead of `false` for user data

  const value = {
    backendUrl,
    isLoggedin, setIsLoggedin,
    userData, setUserData
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
