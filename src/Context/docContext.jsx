import { createContext, useContext, useEffect, useState } from "react";
import { getAuthDoc, getCategoriesAndDocuments } from "../Firebase/firebase";
import { UserContext } from "./UserContext";

export const docContext = createContext();

export const DocContextProvider = ({ children }) => {
  const [queries, setQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, setUserDoc } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getCategoriesAndDocuments(
        "serviceDeskData",
        "queries"
      );
      if (currentUser) {
        const userDocument = await getAuthDoc(currentUser.uid);
        setUserDoc(userDocument);
      }
      setQueries(response);
      setIsLoading(false);
    };
    fetchData();
  }, [setQueries, currentUser, setUserDoc]);

  const value = {
    queries,
  };

  return (
    <docContext.Provider value={value}>
      {isLoading ? "Loading..." : children}
    </docContext.Provider>
  );
};
