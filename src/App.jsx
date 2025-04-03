import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import MenuBar from "./components/menubar/MenuBar";
import AddFood from "./pages/addfood/AddFood"; 
import ListFood from "./pages/listfood/ListFood";
import Orders from "./pages/orders/Orders";
import { ToastContainer } from "react-toastify";

const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    }

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sidebarVisible={sidebarVisible}/>

      <div id="page-content-wrapper">
        <MenuBar toggleSidebar={toggleSidebar}/>
        <ToastContainer />

        <div className="container-fluid">
          <Routes>
            <Route path="/add" element={<AddFood />} />
            <Route path="/list" element={<ListFood />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<ListFood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
