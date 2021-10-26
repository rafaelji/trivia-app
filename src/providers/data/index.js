import { createContext, useState } from "react";

export const dataContext = createContext();

const ProvideData = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export default ProvideData;
