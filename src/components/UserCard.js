import React from 'react';
import'../style/UserCardStyle.css';
import avatar from '../images/avatar.jpg';

const UserCard = ({username,firstname, lastname}) => {
    return(
        <div className="user-card">
            <div className="image-container avatar">
                <img className='img-avatar' src={avatar} alt = "Avatar"></img>
            </div>
            <div className="info-container avatar">
                <h3>Name: {firstname} {lastname}</h3>
                <h4>Username: {username}</h4>
            </div>
        </div>
    );
}

export default UserCard;