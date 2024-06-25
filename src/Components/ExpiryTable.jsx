import React, { useMemo } from "react";
import { expiryColumnDef } from "../columnDefs/epiry.jsx"; // Ensure this path is correct
import chemData from "../Json/chemicals.json";
import expiry from "../assets/expiry.png";
import { MaterialReactTable } from "material-react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faCloudDownload } from "@fortawesome/free-solid-svg-icons";

const ExpiryTable = () => {
  console.log("Rendering ExpiryTable component");
  console.log("chemData:", chemData);

  const chemColumn = useMemo(() => expiryColumnDef, []);
  const chemMockData = useMemo(() => chemData, []);

  console.log("chemColumn:", chemColumn);
  console.log("chemMockData:", chemMockData);

  return (
    <>
      <div className="table-container">
        <div className="table-heading bg-blue-50 mt-16 p-4 flex justify-between flex-wrap">
          <div className="name flex items-center gap-4">
            <img src={expiry} alt="expiry icon" className="w-14 h-14" />
            <h3 className="text-2xl font-semibold">Expiring Inventory</h3>
          </div>
          <div className="CTAs flex flex-wrap justify-end gap-4">
            <div className="empty border bg-white flex items-center justify-between gap-2 py-2 px-8 text-xl font-semibold rounded-lg">
              Print
              <FontAwesomeIcon icon={faPrint} />
            </div>
            <div className="empty border bg-white flex items-center justify-between gap-2 py-2 px-8 text-xl font-semibold rounded-lg">
              Export
              <FontAwesomeIcon icon={faCloudDownload} />
            </div>
          </div>
        </div>
        <MaterialReactTable columns={chemColumn} data={chemMockData} />
      </div>
    </>
  );
};

export default ExpiryTable;
