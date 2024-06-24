import React from "react";
import OverviewCards from "../Components/OverviewCards";
import OverviewTables from "../Components/OverviewTables";

const Overview = () => {
  return (
    <>
      <div className="p-4 sm:px-8">
        <div className="cards">
          <OverviewCards />
          <OverviewTables />
        </div>
      </div>
    </>
  );
};

export default Overview;
