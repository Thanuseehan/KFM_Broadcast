import { createContext, useState } from 'react';  // ✅ Import useState

export const AppContext = createContext();  // ✅ Correct export

export const AppContextProvider = ({ children }) => {  // ✅ Destructure props
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(null);

    const value = { backendUrl, isLoggedin, setIsLoggedin, userData, setUserData };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
