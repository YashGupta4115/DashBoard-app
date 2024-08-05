import React, { useContext, useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";
import Table from "../../../Components/Table/tableHeader";
import { UserContext } from "../../../Context/UserContext";
import { getAuthDoc } from "../../../Firebase/firebase";

const QueriesGrid = [
  {
    Header: "UserId",
    accessor: "user",
    textAlign: "Center",
  },
  {
    Header: "Priority",
    accessor: "issueLevel",
    textAlign: "Center",
  },
  {
    Header: "Title",
    accessor: "orderTitle",
    textAlign: "Center",
  },
  {
    Header: "Descp",
    accessor: "descp",
    textAlign: "Center",
  },
  {
    Header: "CreatedAt",
    accessor: "createdAt",
    textAlign: "Center",
  },
  {
    Header: "Status",
    accessor: "status",
    textAlign: "Center",
  },
];

const AssignedQueries = () => {
  const { displayMode } = useTheme();
  const { currentUser, userDoc, setUserDoc } = useContext(UserContext);

  const [queriesData, setQueriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userDoc && currentUser) {
      const fetchData = async () => {
        setIsLoading(true);
        const userDocument = await getAuthDoc(currentUser);
        setUserDoc(userDocument);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [userDoc, currentUser, setUserDoc]);

  useEffect(() => {
    const data = userDoc.assignedQueries;
    if (!isLoading && userDoc && data) {
      const formattedQueries = data.map((query) => {
        const createdAtDate =
          query.createdAt instanceof Date
            ? query.createdAt
            : new Date(query.createdAt.seconds * 1000);
        return {
          ...query,
          createdAt: createdAtDate.toLocaleString(),
        };
      });
      setQueriesData(formattedQueries);
    } else {
      alert("No assigned Queries");
      console.log("No queries to process."); // Debugging log
    }
  }, [userDoc, isLoading]);

  if (isLoading || !userDoc) {
    return <div>Loading...</div>; // or some loading indicator
  }

  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Page" title="Assigned Queries" />
      <Table tableData={queriesData} tableGrid={QueriesGrid} />
    </div>
  );
};

export default AssignedQueries;
