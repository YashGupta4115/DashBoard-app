import React from "react";
import { useTable, useSortBy } from "react-table";

// Sample orders data
import { useTheme } from "../../Context/themeContext";

const Table = ({ tableGrid, tableData }) => {
  const { theme, displayMode } = useTheme();
  const bgcolor = displayMode === "light" ? "papayawhip" : "#20232A";
  const fontColor = displayMode === "light" ? "black" : "papayawhip";
  // Define columns
  const columns = React.useMemo(() => tableGrid, [tableGrid]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData }, useSortBy);

  return (
    <table
      {...getTableProps()}
      style={{
        border: `solid 5px ${theme}`,
        width: "100%",
        margin: "20px 0",
        color: "black",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  borderBottom: "solid 3px red",
                  background: bgcolor,
                  color: fontColor,
                  fontWeight: "bold",
                  cursor: "pointer",
                  border: "solid 1px",
                  padding: "10px",
                }}
              >
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: "10px",
                    border: "solid 1px gray",
                    background: bgcolor,
                    color: fontColor,
                  }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
