import React from "react"; 
import { Link, Outlet } from "react-router-dom";
import TotalUsers from "./TotalUser";
 
export default function Users(){
    return(
        <>
        <div className="users">
            <div className="inform-users">
                <TotalUsers />
                <Link to="id" className="contein-lastUser">
                    <div className="lastUser" >
                        <img src="https://i.postimg.cc/tC3RMPhV/15399268807-f04a0040bb-n.jpg" alt="logo" />
                        <p>Cristian Camilo Giraldo Rivera</p>
                    </div>
                    <p className="title-last">Last user create</p>
                </Link>
            </div>
        </div>
        </>
    )
}