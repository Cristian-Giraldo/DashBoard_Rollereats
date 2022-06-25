import React from "react";
import {Outlet} from 'react-router-dom';


//Components
import Sidebar from "./Sidebar";

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