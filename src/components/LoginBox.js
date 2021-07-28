import React, { Component } from 'react';
import '../style/LoginBoxStyle.css';

class LoginBox extends Component{
    constructor(props){
        super(props);
        this.state={
            loginUsername: '',
            loginPassword: ''
        }
    }

    onUsernameChange = (event) =>{
        this.setState({loginUsername: event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({loginPassword: event.target.value})
    }

    onSubmitLogin = () => {
        fetch('https://mighty-anchorage-31699.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.loginUsername,
                password: this.state.loginPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

        render(){
            return(
                <div className="login-container">
                    <div className="login-header">
                        Login
                    </div>

                    <div className="box">
                        <div className="input">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text"
                                name = "username"
                                className="login-input"
                                placeholder="username"
                                onChange={this.onUsernameChange}/>
                        </div>

                        <div className="input">
                            <label htmlFor="passsword">Password</label>
                            <input 
                                type="password"
                                name = "password"
                                className="login-input"
                                placeholder="password"
                                onChange={this.onPasswordChange}/>
                        </div>

                        <button
                            type="button"
                            className="login-button"
                            onClick={
                                this.onSubmitLogin
                            }>
                            Login
                        </button>
                    </div>
                </div>
            );
        }
    }

    export default LoginBox;