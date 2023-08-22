import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports';
import Orders from './pages/Orders/Orders';
import Customers from './pages/Customers/Customers';
import Integration from './pages/Integration/Integration';
import Blog from './pages/Blog/Blog';
import Socialmedia from './pages/Socialmedia/Socialmedia';
import Joblisting from './pages/Joblisting/Joblisting';
import Kanban from './pages/Kanban/Kanban';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Customers" element={<Customers />} />
      <Route path="Integration" element={<Integration />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Socialmedia" element={<Socialmedia />} />
      <Route path="Joblisting" element={<Joblisting />} />
      <Route path="/Kanban" element={<Kanban />}/>
    </Routes>
  </BrowserRouter >
  );
}

export default App;
