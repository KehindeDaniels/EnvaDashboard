import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Inventory from "./Layout/Inventory";
import SampleLog from "./Pages/SampleLog";
import Clients from "./Pages/Clients";
import Calender from "./Pages/Calender";
import Overview from "./Pages/Overview";
import Items from "./Pages/Items";
import Consumables from "./Pages/Consumables";
import Files from "./Pages/Files";

export default function App() {
  return (
    <BrowserRouter basename="/EnvaDashboard">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="inventory" element={<Inventory />}>
            <Route index element={<Overview />} />
            <Route path="items" element={<Items />} />
            <Route path="consumables" element={<Consumables />} />
            <Route path="files" element={<Files />} />
          </Route>
          <Route path="sampleLog" element={<SampleLog />} />
          <Route path="clients" element={<Clients />} />
          <Route path="calendar" element={<Calender />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
