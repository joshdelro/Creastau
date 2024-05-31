import React, { Component, } from 'react';
import  { Navigate } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom';

import './Login.css';

import AdminPage from './Admin.js'

function login() {
    if(this.state.email == "admin@gmail.com" ) {
        alert("you're inside!")
        // return <Navigate to="/AdminPage" />
    }
}

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            // isDisbaled: true
        }
    }

   
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);
        
        return (
            <>
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <div className="formGroup">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="input username" 
                            required 
                            onChange= {(e) => this.setState({email: e.target.value})} 
                        />
                        
                    </div>
                    <div className="formGroup">
                        <input
                            type="password"
                            name="password"
                            placeholder="input password"
                            required
                            onChange= {(e) => this.setState({password: e.target.value})}
                        />
                    </div>
                    <button type="submit" onClick={this.login()}>Login</button>
                </form>
            </div>
            </>
        )
    }
}

export default Login;

// validateForm() {
//     let emailNotEmpty = this.state.email
//     let passwordNotEmpty = this.state.password 

//     if(emailNotEmpty && passwordNotEmpty) {
//         this.setState({isDisabled: false})
//     } else {
//         this.setState({isDisabled: true})
//     }
// }
// onClick={this.validateForm()} disabled={this.state.isDisabled}
