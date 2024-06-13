import React, { useMemo } from "react";
import { Columns } from "./columns";
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="">
      <table {...getTableProps()}>
        {/* Table Head */}
        <thead>
          {headerGroups.map((hG) => (
            <tr {...hG.getHeaderGroupProps()} key={hG.id}>
              {hG.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table Body */}
        <tbody {...getTableBodyProps()}>
          <tr>
            <td></td>
          </tr>
        </tbody>
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
