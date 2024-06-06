import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Inventory from "./Pages/Inventory";
import SampleLog from "./Pages/SampleLog";
import Clients from "./Pages/Clients";
import Calender from "./Pages/Calender";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inventory />} />
            <Route path="sampleLog" element={<SampleLog />} />
            <Route path="clients" element={<Clients />} />
            <Route path="calender" element={<Calender />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
