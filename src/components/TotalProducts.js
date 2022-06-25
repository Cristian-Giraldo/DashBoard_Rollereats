import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";

export default function TotalProducts(){

    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        const endPoint = 'http://localhost:3000/restaurantes/listas'
        axios.get(endPoint)
            .then(response =>{
                const apiData = response.data;
                setProductList(apiData)  
            })
            .catch(error=>{
                console.log('error')
            })
    },[setProductList]);
    return(
        <div className="totalUsers">
            <h1>{productList.total}</h1>
            <p>Total products</p> 
        </div>
    )
}