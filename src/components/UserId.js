import React from "react";
import { Link } from "react-router-dom";

export default function UserId(){
    return(
        <div className="userId">
            <div className="user-contein">
                <img src="https://i.postimg.cc/tC3RMPhV/15399268807-f04a0040bb-n.jpg" alt="logo" />
                <div className="user-inform">
                    <p className="name">Cristian Camilo Giraldo Rivera</p>
                    <p className="email inf">Correo Electronico</p>
                    <p className="number inf">Telefono</p>
                    <p className="country inf">Pais</p>
                </div>
            </div>
        </div>
    )
}