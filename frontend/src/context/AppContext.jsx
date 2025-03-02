import { createContext } from 'react';

export const AppContent = createContext();  // ✅ Create the context

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);

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
}  