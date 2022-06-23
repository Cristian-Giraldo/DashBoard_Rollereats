import React from "react";
import {NavLink} from 'react-router-dom';

export default function Footer(){
    return(
        /*-- Footer*/
        <footer className="aside-footer">
            <NavLink to="#About">About</NavLink>
            <NavLink to="#Contact">Contact with us</NavLink>
            <NavLink to="#Creators">Creators</NavLink>
            <NavLink to="#Developers" className="developers">Developers</NavLink>
            <NavLink to="#conditions">Terms and conditions</NavLink>
            <NavLink to="#Policy">Policy and privacy</NavLink>
            <NavLink to="#works">How Rollereats works</NavLink>
            <p>&copy; 2022 Rollereats</p>
        </footer>
        /*end Footer*/
    )
}