import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import PageWrapper from './Components/PageWrapper';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
