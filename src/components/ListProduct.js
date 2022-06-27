import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";

export default function ListProduct(){

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

    return(
        <>
            <h3 className="title-product">List products</h3>
            <table className="list_producto" cellspacing="10" >
                <thead className="thead">
                    <th className="header">Name</th>
                    <th className="header">Price</th>
                </thead>
                <tbody>
                    {
                        productList.map((product, idx)=>{
                            return(
                                <tr className="data" key={idx}>
                                    <td className="name"><img src="https://i.postimg.cc/tC3RMPhV/15399268807-f04a0040bb-n.jpg" alt="logo" />{product.productName}</td>
                                    <td className="price"><span>$</span>{product.productPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}

