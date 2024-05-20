import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageWrapper from "./Components/PageWrapper";
import AboutPage from "./PracticePages/AboutPage";
import HomePage from "./PracticePages/HomePage";
import VansPage from "./PracticePages/Vans/VansPage";
import VansDetail from "./PracticePages/Vans/VansDetail";
import Layout from "./PracticeComponent/Layout";
import Income from "./PracticePages/Host/Income";
import Review from "./PracticePages/Host/Review";
import Dashboard from "./PracticePages/Host/Dashboard";
import Host from "./PracticeComponent/Host";
import HostVans from "./PracticePages/Host/HostVans/HostVans";
import HostVansDetails from "./PracticePages/Host/HostVans/HostVansDetails";
import Details from "./PracticePages/Host/HostVans/Details";
import Pricing from "./PracticePages/Host/HostVans/Pricing";
import Photos from "./PracticePages/Host/HostVans/Photos";

export default function App() {
  return (
   <>
   {/* <Home/> */}
   <BrowserRouter>

      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />}/>
          <Route path="AboutPage" element={<AboutPage />}/>
          <Route path="VansPage" element={<VansPage />}/>
          <Route path="VansPage/:id" element={<VansDetail />}/>
          
          <Route path="Host" element={<Host/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="Income" element={<Income/>}/>
            <Route path="HostVans" element={<HostVans/>}/>
            <Route path="HostVans/:id" element={<HostVansDetails/>}>
                <Route index element={<Details/>}/>
                <Route path="Pricing" element={<Pricing/>}/>
                <Route path="Photos" element={<Photos/>}/>
            </Route>
            <Route path="Review" element={<Review/>}/>
          </Route>
        </Route>
      </Routes>
   </BrowserRouter>
   </>
  )
}

function Home() {
  return(
    <h1>Home Page</h1>
  )
}