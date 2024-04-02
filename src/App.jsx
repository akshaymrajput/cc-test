import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default App;
