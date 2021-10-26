import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const ProvideData = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    setCurrentQuestion(data[0]);
  }, [data]);

  return (
    <dataContext.Provider value={{ data, setData, currentQuestion }}>
      {children}
    </dataContext.Provider>
  );
};

export default ProvideData;
