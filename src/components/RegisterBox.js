import React, { Component } from 'react';
import '../style/RegisterBoxStyle.css'

class RegisterBox extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    onUsernameChange = (event) =>{
        this.setState({username: event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    onFirstNameChange = (event) =>{
        this.setState({firstName: event.target.value})
    }

    onLastNameChange = (event) =>{
        this.setState({lastName: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
                
            }
        })
    }

    render(){
        return(
            <div className="register-container">
                <div className="register-header">
                    Register
                </div>

                <div className="box">

                    <div className="input">
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            name="fname"
                            className="register-input"
                            placeholder="First Name"
                            onChange={this.onFirstNameChange}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            className="register-input"
                            placeholder="Last Name"
                            onChange={this.onLastNameChange}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="register-input"
                            placeholder="username"
                            onChange={this.onUsernameChange}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="register-input"
                            placeholder="password"
                            onChange={this.onPasswordChange}
                        />
                    </div>

                    <button
                        type="button"
                        className="register-button"
                        onClick={this
                        .onSubmitRegister
                        }>Register</button>

                </div>
            </div>
        );
    }
}

export default RegisterBox;