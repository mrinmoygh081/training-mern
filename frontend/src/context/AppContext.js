import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);

  const getData = (user) => {
    console.log(user);
    setData(user);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, data, getData }}>
      {children}
    </AppContext.Provider>
  );
};
