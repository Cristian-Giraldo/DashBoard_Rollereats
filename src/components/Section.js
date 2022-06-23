import React from "react";
import {Routes, Route} from 'react-router-dom'
import {NavLink, Outlet} from 'react-router-dom';


//Components
import Sidebar from "./Sidebar";
import Users from "./Users";
import Products from "./Products";

export default function Section(){
    return(
        <>
            <div className="section">
            <Sidebar />
            <Outlet />
            </div>
        </>
    )
}