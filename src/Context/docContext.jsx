import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../Firebase/firebase";

export const docContext = createContext();

export const DocContextProvider = ({ children }) => {
  const [queries, setQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getCategoriesAndDocuments(
        "serviceDeskData",
        "queries"
      );
      setQueries(response);
      setIsLoading(false);
    };
    fetchData();
  }, [setQueries]);
  const value = {
    queries,
  };

  return (
    <docContext.Provider value={value}>
      {isLoading ? "Loading..." : children}
    </docContext.Provider>
  );
};
