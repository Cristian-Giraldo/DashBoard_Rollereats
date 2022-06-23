import * as React from "react";
import { Link } from "react-router-dom";
import {MdOutlineNotificationImportant} from 'react-icons/md'

export default function Topbar() {
    return (
        <>
        <div className="topbar">
            <div className="topbar_logo">
                <Link to="/" className="link_logo">
                    <img src="https://i.postimg.cc/8CLHfwvC/Logo-Fondo-White.png" alt="logo" />
                </Link>
            </div>
            <div className="topbar_nav">
                <ul className="list_nav">
                    <li className="item-icon">
                        <Link to="/" className="link_icon"><MdOutlineNotificationImportant size={22} color='black' /></Link>
                        <p className="counter">1</p>
                    </li>
                    <li className="item_profile">
                        <Link to="/Profile" className="link_profile">
                            administrator 
                            <img src="https://i.postimg.cc/tC3RMPhV/15399268807-f04a0040bb-n.jpg" alt="Profile" />
                        </Link>  
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
} 

