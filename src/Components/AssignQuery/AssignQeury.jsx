import React, { useContext, useEffect, useState } from "react";
import "./AssignQeury.css";
import { useTheme } from "../../Context/themeContext";
import {
  getCategoriesAndDocuments,
  updateDocData,
  updateEmpDocs,
} from "../../Firebase/firebase";
import { UserContext } from "../../Context/UserContext";

const AssignQuery = ({ selectedQuery, query, onClose, onAssign }) => {
  const [assignee, setAssignee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { displayMode, theme } = useTheme();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const categoriesAndDocuments = await getCategoriesAndDocuments(
          "employees"
        );
        setEmployees(categoriesAndDocuments);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching employees: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleAssign = async () => {
    try {
      const updatedQuery = {
        ...selectedQuery,
        assignedTo: employees[assignee].displayName,
      };
      await updateDocData("serviceDeskData", "queries", updatedQuery);

      await updateEmpDocs("employees", assignee, updatedQuery);
      onAssign();
      onClose();
    } catch (err) {
      console.error("Error assigning query: ", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        color: theme,
      }}
      className="assignQuery-overlay"
    >
      <div
        style={{
          border: `3px solid ${theme}`,
          backgroundColor: displayMode === "light" ? "white" : "#33373E",
        }}
        className="assignQuery-container"
      >
        <h2>Assign Query</h2>
        <p>{query.orderTitle}</p>
        <select
          className="assignQuery-bottom-container-items"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option value="">Select Assignee</option>
          {Object.keys(employees).map((uid) => (
            <option key={employees[uid].email} value={uid}>
              {employees[uid].email === currentUser.email
                ? `${employees[uid].displayName}(Me)`
                : employees[uid].displayName}
            </option>
          ))}
        </select>
        <button
          className="assignQuery-bottom-container-items"
          onClick={handleAssign}
        >
          Assign
        </button>
        <button
          className="assignQuery-bottom-container-items"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AssignQuery;
