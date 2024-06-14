import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicTable from "./Components/BasicTable";
import Sorting from "./Components/Sorting";

export default function App() {
  return (
    <div className="">
      {/* <BasicTable /> */}
      <Sorting />
    </div>
  );
}
