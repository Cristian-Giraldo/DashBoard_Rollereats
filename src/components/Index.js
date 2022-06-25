import React from "react";

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