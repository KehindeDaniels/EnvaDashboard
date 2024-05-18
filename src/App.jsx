import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageWrapper from "./Components/PageWrapper";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import VansPage from "./VansPage";
import VansDetail from "./VansDetail";

export default function App() {
  return (
   <>
   {/* <Home/> */}
   <BrowserRouter>
    <header className="p-16">
      <nav>
        <ul className="flex gap-16">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutPage">About</Link></li>
          <li><Link to="/VansPage">Van</Link></li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/AboutPage" element={<AboutPage />}/>
        <Route path="/VansPage" element={<VansPage />}/>
        <Route path="/VansPage/:id" element={<VansDetail />}/>
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