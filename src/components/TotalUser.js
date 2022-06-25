import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";

export default function TotalUsers(){

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        const endPoint = 'http://localhost:3000/usuarios/listas'
        axios.get(endPoint)
            .then(response =>{
                const apiData = response.data;
                setUserList(apiData)  
            })
            .catch(error=>{
                console.log('error')
            })
    },[setUserList]);

    return(
        <div className="totalUsers">
            <h1>{userList.total}</h1>
            <p className="title">Total users</p> 
        </div>
    )
}