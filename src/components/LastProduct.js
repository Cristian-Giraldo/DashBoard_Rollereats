import React from "react";
import { Link} from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
// import axios from "axios";


export default function LastProduct(){

    const [ProductList, setProductList] = useState([]);

    useEffect(()=>{
        const endPoint = 'http://localhost:3000/restaurantes/listas'
        axios.get(endPoint)
            .then(response =>{
                const apiData = response.data.lastProduct;
                setProductList(apiData)   
            })
            .catch(error=>{
                console.log('error')
            })
    },[setProductList]);

    return(
        <Link to="id" className="contein-lastProduct">
            <p className="title">Last product create</p>
            <div className="lastUser" >
                <img src="https://i.postimg.cc/tC3RMPhV/15399268807-f04a0040bb-n.jpg" alt="logo" />
            </div>
            <p className="last_email">{ProductList.productName}</p>
        </Link>
    )
}