import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";

export default function UserId(){

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
    console.log(userList)

    return(
        <div className="userId">
            <div className="user-contein">
                <img src="https://i.postimg.cc/tC3RMPhV/15399268807-f04a0040bb-n.jpg" alt="logo" />
                <div className="user-inform">
                    <p className="label">Email address</p>
                    <p className="inf_Appi">{userList.email}</p>
                    <p className="label">Phone</p>
                    <p className="inf_Appi">{userList.phone}</p>
                    <p className="label">Country</p>
                    <p className="inf_Appi">{userList.country}</p>
                </div>
            </div>
        </div>
    )
}