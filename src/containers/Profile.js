import React from 'react';
import UserCard from '../components/UserCard';
import Tasks from '../components/Tasks';
import '../style/Profile.css';

const Profile = ({username,firstname, lastname, id}) => {
    return(
        <div>
            <div className="profile">
                <UserCard
                username ={username}
                firstname={firstname}
                lastname={lastname}
                />
                
            </div>

            <div className="tasks">
                <Tasks
                id = {id}/>
            </div>        
        </div>
    );
}

export default Profile;