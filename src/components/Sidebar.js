//Bookstores
import React from "react"; 
import {NavLink, Outlet} from 'react-router-dom';

//Components
import {AiOutlineRest} from 'react-icons/ai'
import {BiUserCheck} from 'react-icons/bi'
import Footer from "./Footer";

export default function Sidebar(){
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        };
    };
    return (
        <>
            <aside className="aside-container" id="aside-container">
                <div className="aside-open">
                    <ul>
                        <h4>Panels</h4>
                        <li>
                            <BiUserCheck size={24} />
                            < NavLink style={navLinkStyles} to="users">Users</NavLink>
                        </li>
                        <li>
                            <AiOutlineRest size={22} />
                            < NavLink style={navLinkStyles} to="products">Products</NavLink>
                        </li>
                    </ul>
                </div>
                < Footer/>
            </aside>
        </>
    )
}