import React from "react";
import { Link } from "react-router-dom";

//Components
import TotalProducts from "./TotalProducts";
import ListProduct from "./ListProduct";

export default function Products(){
    return(
        <div className="DashBoard_product">
            <div className="inform-product">
                <TotalProducts />
                <article className="product" data-open="modal-showproduct">
                    <Link to ="/productDetail">
                        <div className="contein-img">
                            <img src="https://th.bing.com/th/id/OIP.Z8couH1GODI_3Ana6zXLBQHaE6?pid=ImgDet&rs=1" alt=""/>
                        </div>
                        <div className="data">
                            <div className="initial-data">
                                <h3 className="name">Product name</h3>
                            </div>
                        </div>
                    </Link>
                    <p>Last product create</p>
                </article>
            </div>
            <ListProduct />
        </div>
    )
}