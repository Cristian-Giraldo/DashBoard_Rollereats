import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";

//Components
import TotalUsers from "./TotalUser";
import LastUser from "./LastUser";
 
export default function Users(){

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
        <>
        <div className="users">
            <div className="inform-users">
                <TotalUsers />
                <LastUser />
            </div>
        </div>
        </>
    )
}