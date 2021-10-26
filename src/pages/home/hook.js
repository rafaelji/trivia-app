import { useEffect, useState } from "react";

const useHome = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return { loading };
};

export default useHome;
