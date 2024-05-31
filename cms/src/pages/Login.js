import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';
import AdminPage from './Admin.js'
import EmployeePage from './Employee'

import './Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true)
    
    function login(e) {
        e.preventDefault();
        if(email === "admin@gmail.com" && password == "admin") {
            alert("Admin account");
            <Navigate to='/EmployeePage' replace={true}/>
        } 
        else if (email === "employee@gmail.com" && password == "employee") {
            alert("Employee account");
            // setIsAdmin(false)
        }
        else {
            alert("Wrong username and password");
        }
        // setEmail("");
        // setPassword("");
    }
    console.log("This is the state email: " + email);
    console.log("This is the state pass: " + password);
    
    useEffect(() => {
        let emailNotEmpty =  email !=="";
        let passwordNotEmpty = password !=="";
    
        if(emailNotEmpty && passwordNotEmpty) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email, password])
    return (
        <>
            {email === "admin@gmail.com" && password == "admin" && (
                <Navigate to="/AdminPage" replace={true}/>
            )}
            {email === "employee@gmail.com" && password == "employee" && (
                <Navigate to="/EmployeePage" replace={true}/>
            )}
        <div className="logContainer">
            <div className="login vCenter">
                <form onSubmit={login}>
                    <div className="formGroup">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Inpute Username" 
                            required 
                            onChange= {(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            type="password"
                            name="password"
                            placeholder="Input Password"
                            required
                            onChange= {(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={login} disabled={isDisabled} >LOGIN</button>
                </form>
            </div>
        </div>
        
        <Routes>
            <Route path='/AdminPage' element ={<AdminPage />} />
            <Route path='EmployeePage' element ={<EmployeePage />} />
        </Routes>
        </>
    )
}

{/* <Navigate to='/EmployeePage' replace={true}/> */}

//{isAdmin ? <Navigate to='/AdminPage' replace={true} /> : <Navigate to='/EmployeePage' replace={true} />}