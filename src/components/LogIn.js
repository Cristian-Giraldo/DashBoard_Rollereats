import React from "react";
import {NavLink} from 'react-router-dom';
import axios from "axios";

export default function LogIn(){

    const submitHandler = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value; 

        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(regexEmail.test(email));
        //Validaciones
       // Validaciones
       if(email === '' || password ===''){
        console.log('Los campos no pueden estar vacios');
        return;
        }
        if(email !=='' && !regexEmail.test(email)){
        console.log('Debes escribir una dirección de correo electronico valida')
        return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
        console.log('Credenciales Invalidas');
        return;
        }
        // Solicitud post a la API
        console.log('Ok, estamos listos para enviar la infomación');
        axios
            .post('http://challenge-react.alkemy.org',{email,password})
            .then(res=>{ 
                console.log(res.data);
                const tokenRecibido = res.data.token;
                localStorage.setItem('token', tokenRecibido)
            }); 
    }
    return(
       /* Login */
        <div className="login">
            <div className="login-contain">
                <div className="contain-left">
                    <div className="text-start">
                        <h1>Log In</h1>
                        <p>We welcome you again!</p>
                    </div>
                    <div className="text-end">
                        <p>DashBoard Rollereats</p>
                    </div>
                </div>
                <div className="contain-right">
                    <form onSubmit={submitHandler} className="logIn" id="logIn">
                        <div className="login-title">
                            <h2>Log In</h2>
                        </div>
                        <div className="Email">
                            <label htmlFor="email">Email address</label>
                            <input autoComplete="current-email" type="text" id="email" placeholder="Email address" name="email"/>
                            {/* <p className="error-email">Enter the email address.</p>
                            <p className="error-email-incorrect">The email address you entered is not connected to an account</p> */}
                        </div>
                        <div className="password">
                            <div className="label-forgot">
                                <label htmlFor="password">Password</label>
                                <NavLink to ="">Forgot your password?</NavLink>
                            </div>
                            <input autoComplete="current-password" type="password" id="password" placeholder="Password" name="password"/>
                            {/* <p className="error-password">Enter your password</p>
                            <p className="error-password-Incorrect">The password you entered is incorrect. <NavLink to ="">Forgot your password?</NavLink> </p> */}
                        </div>
                        <p className="contract">By singing in, I agree <NavLink to =""> DashBoard Rollereats's Privacy Policy</NavLink> and <NavLink to ="">Term of Service</NavLink></p>
                        <button className="login-button" type="submit" form="logIn">Log In</button>
                        <div className="not-close">
                            <input type="checkbox" name="" id="not-close"/>
                            <label htmlFor="not-close">Do not close your account</label>
                        </div>
                        <div className="login-footer">
                            <span>DashBoard Rollereats is protected by reCAPTCHA and its <NavLink to ="">Privacy Policy</NavLink>  and <NavLink to ="">Terms of Service</NavLink> apply.</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        /* end Login*/
    )
}
