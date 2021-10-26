import { useContext } from "react";
import { dataContext } from "../../providers/data";

const useData = () => useContext(dataContext);

export default useData;
