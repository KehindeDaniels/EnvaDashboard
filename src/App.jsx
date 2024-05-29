import PageWrapper from "./Components/PageWrapper";
import BrowserRouter, { Route, Routes } from  "react-router-dom"

export default function App() {
  return (
   <>
   <Routes>
    hello
    <Route path="/" element={<PageWrapper/>}></Route>
   </Routes>
   </>
  )
}