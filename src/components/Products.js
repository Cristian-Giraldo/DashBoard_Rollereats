import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";

//Components
import TotalProducts from "./TotalProducts";
import ListProduct from "./ListProduct";
import LastProduct from "./LastProduct";

export default function Products(){
    
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        const endPoint = 'http://localhost:3000/restaurantes/listas'
        axios.get(endPoint)
            .then(response =>{
                const apiData = response.data.data;
                setProductList(apiData)  
            })
            .catch(error=>{
                console.log('error')
            })
    },[setProductList]);
    console.log(productList)

    return(
        <div className="DashBoard_product">
            <div className="inform-product">
                <TotalProducts />
                <LastProduct />
            </div>
            <ListProduct />
        </div>
    )
}