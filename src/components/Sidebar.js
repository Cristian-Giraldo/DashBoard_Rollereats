//Bookstores
import React from "react"; 
import {NavLink} from 'react-router-dom';

//Components
import {MdNoFood} from 'react-icons/md'
import {FaUserFriends} from 'react-icons/fa'
import Footer from "./Footer";

export default function Sidebar(){
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "white" : 'lavender',
                color:'black',
                margin: "0 10px",
            };
    };
    return (
        <>
            <aside className="aside-container" id="aside-container">
                <div className="aside-open">
                    <ul>
                        <li>
                            < NavLink className='Link_panels' style={navLinkStyles} to="users"><FaUserFriends size={24} /><span className="item_panel">Users</span></NavLink>
                        </li>
                        <li>
                            < NavLink className='Link_panels' style={navLinkStyles} to="products"><MdNoFood size={22} /><span className="item_panel" >Products</span></NavLink>
                        </li>
                    </ul>
                </div>
                < Footer/>
            </aside>
        </>
    )
}