import React, { useContext, useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";
import Table from "../../../Components/Table/tableHeader";
import { docContext } from "../../../Context/docContext";

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

const Queries = () => {
  const { displayMode } = useTheme();
  const { queries } = useContext(docContext);

  const [queriesData, setQueriesData] = useState([]);

  useEffect(() => {
    const data = queries.queries;
    if (queries && data.length > 0) {
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
      console.log("No queries to process."); // Debugging log
    }
  }, [queries]);

  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Page" title="Queries" />
      <Table tableData={queriesData} tableGrid={QueriesGrid} />
    </div>
  );
};

export default Queries;
