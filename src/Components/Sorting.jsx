import React, { useMemo } from "react";
import { Columns, GroupedCols } from "./columns";
import mockData from "./MOCK_DATA.json";
import { useSortBy, useTable } from "react-table";

const Sorting = () => {
  //   const columns = useMemo(() => Columns, []);

  //   const data = useMemo(() => mockData, []);
  //   const tableInstance = useTable({ columns, data });

  //   const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
  //     tableInstance;
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => mockData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <div className="container mx-auto">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200"
      >
        {/* Table head */}
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaqderProps(column.getSortByToggleProps)}
                  key={column.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "👇🏾" : "👆🏾") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table body */}
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sorting;
