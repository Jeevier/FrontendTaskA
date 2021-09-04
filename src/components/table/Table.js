import React from "react";
import { useTable, useGlobalFilter } from "react-table";
import data from "./data";
import columns from "./columns";
import styles from "./Table.module.css";
import GlobalFilter from "./GlobalFilter";

const Table = () => {
  const tableColumns = React.useMemo(() => columns, []);
  const tableData = React.useMemo(() => data, []);

  const tableInstance = useTable(
    { columns: tableColumns, data: tableData },
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  return (
    <main className={styles.main}>
      <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
