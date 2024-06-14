import React, { useMemo } from "react";
import { Columns, GroupedCols } from "./columns";
import mockData from "./MOCK_DATA.json";
import { useTable } from "react-table";

const BasicTable = () => {
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
  } = useTable({ columns, data });

  return (
    <div className=" ">
      <table
        {...getTableProps()}
        className="divide-y-4 divide-green-200 mx-auto divide-x-2"
      >
        {/* Table Head */}
        <thead className="bg-green-100">
          {headerGroups.map((hG) => (
            <tr {...hG.getHeaderGroupProps()} key={hG.id} className="ml-4 px-6">
              {hG.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table Body */}
        <tbody {...getTableBodyProps()} className="divide-y-2 divide-x-2">
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

        {/* Table Footer */}
        <tfoot>
          {footerGroups.map((fG) => (
            <tr {...fG.getFooterGroupProps()}>
              {fG.headers.map((column) => (
                <td {...column.getFooterProps()}>
                  {column.render("Footer")} className="divide-y-4
                  divide-green-200 mx-auto divide-x-2 bg-green-300"
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
    // <div className="container mx-auto">
    //   <table
    //     {...getTableProps()}
    //     className="min-w-full divide-y divide-gray-200"
    //   >
    //     {/* Table head */}
    //     <thead className="bg-gray-50">
    //       {headerGroups.map((headerGroup) => (
    //         <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
    //           {headerGroup.headers.map((column) => (
    //             <th
    //               {...column.getHeaderProps()}
    //               key={column.id}
    //               className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //             >
    //               {column.render("Header")}
    //             </th>
    //           ))}
    //         </tr>
    //       ))}
    //     </thead>

    //     {/* Table body */}
    //     <tbody
    //       {...getTableBodyProps()}
    //       className="bg-white divide-y divide-gray-200"
    //     >
    //       {rows.map((row) => {
    //         prepareRow(row);
    //         return (
    //           <tr {...row.getRowProps()} key={row.id}>
    //             {row.cells.map((cell) => (
    //               <td
    //                 {...cell.getCellProps()}
    //                 key={cell.id}
    //                 className="px-6 py-4 whitespace-nowrap"
    //               >
    //                 {cell.render("Cell")}
    //               </td>
    //             ))}
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default BasicTable;
