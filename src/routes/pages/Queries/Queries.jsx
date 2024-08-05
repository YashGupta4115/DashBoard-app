import React, { useContext, useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";
import Table from "../../../Components/Table/tableHeader";
import { docContext } from "../../../Context/docContext";
import AssignQuery from "../../../Components/AssignQuery/AssignQeury";

const Queries = () => {
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
    {
      Header: "AssignTo",
      accessor: "assignedTo",
      textAlign: "Center",
      Cell: ({ row }) => (
        <div>
          {row.original.assignedTo !== "none" ? (
            <span>{row.original.assignedTo}</span>
          ) : (
            <div>
              <p style={{ fontSize: "10px", margin: "0" }}>Not assigned</p>
              <button onClick={() => handleAssign(row.original)}>
                AssignTo
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];

  const { displayMode } = useTheme();
  const { queries } = useContext(docContext);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [queriesData, setQueriesData] = useState([]);

  useEffect(() => {
    const data = queries ? queries.queries : null;
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

  const handleAssign = (row) => {
    setSelectedQuery(row);
  };
  const handleClose = () => {
    setSelectedQuery(null);
    window.location.reload();
  };

  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Page" title="Queries" />
      <Table tableData={queriesData} tableGrid={QueriesGrid} />
      {selectedQuery && (
        <AssignQuery
          selectedQuery={selectedQuery}
          query={selectedQuery}
          onClose={handleClose}
          onAssign={handleClose}
        />
      )}
    </div>
  );
};

export default Queries;
