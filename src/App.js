import React, { Component } from 'react';
import LoginBox from './components/LoginBox';
import RegisterBox from './components/RegisterBox';
import Navigation from './components/Navigation';
import Profile from './containers/Profile';
import './style/AppStyle.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      route: 'signin',
      isSignedIn: false,
      user:{
            id: '',
            username:'',
            firstname:'',
            lastname:''
      }
    };
  }

  loadUser = (data) =>{
    this.setState({user: {
      id: data.id,
      username:data.username,
      firstname:data.firstname,
      lastname:data.lastname
    }})
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
        this.setState({isSignedIn: false})
    }else if (route === 'home') {
        this.setState({isSignedIn:true})
    }
    this.setState({route: route})
  }

  render(){
    const {isSignedIn} = this.state;
    return(
      <div className = "page-container">
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
         {this.state.route === 'home'
           ? <Profile
           username = {this.state.user.username}
           firstname = {this.state.user.firstname}
           lastname = {this.state.user.lastname}
           id = {this.state.user.id}
           />
           : <div className="box-container">
          <div className="box-controller">
            <div
            className={"controller " + (this.state.isLoginOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showLoginBox
            .bind(this)}>
            Login
           </div>
           <div
            className={"controller " + (this.state.isRegisterOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showRegisterBox
            .bind(this)}>
            Register
          </div>
        </div>

        <div className="login-register-box">
          {this.state.isLoginOpen && <LoginBox loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>}
          {this.state.isRegisterOpen && <RegisterBox loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>}
        </div>
      </div>}
      </div>
     
    );
  }
}

export default App;