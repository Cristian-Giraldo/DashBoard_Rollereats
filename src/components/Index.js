import React from "react";
import { Link } from "react-router-dom";

//Components
import TotalProducts from "./TotalProducts";
import TotalUsers from "./TotalUser";

export default function Index(){
    return(
        <div className="DashBoard_product">
            <div className="inform-product">
                <TotalUsers />
                <TotalProducts />
            </div>
        </div>
    )
}