import React from "react";
import { Link} from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";

export default function LastUser(){

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        const endPoint = 'http://localhost:3000/usuarios/listas'
        axios.get(endPoint)
            .then(response =>{
                const apiData = response.data.lastUser;
                setUserList(apiData)   
            })
            .catch(error=>{
                console.log('error')
            })
    },[setUserList]); 

    return(
        <Link to="id" className="contein-lastUser">
            <p className="title">Last user create</p>
            <div className="lastUser" >
                <img src="https://i.postimg.cc/tC3RMPhV/15399268807-f04a0040bb-n.jpg" alt="logo" />
            </div>
            <p className="last_email">{userList.email}</p>
        </Link>
    )
}