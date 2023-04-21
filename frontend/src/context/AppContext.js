import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  const getData = (user) => {
    console.log(user);
    setData(user);
  };

  const fetchCarData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4000/product", requestOptions)
      .then((response) => response.json())
      .then((result) => setData2(result?.msg))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  // data?.somthing == data && data.somthing

  return (
    <AppContext.Provider value={{ isLoggedIn, data, data2, getData }}>
      {children}
    </AppContext.Provider>
  );
};
