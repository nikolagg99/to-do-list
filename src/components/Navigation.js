import React from 'react';
import '../style/NavigationStyle.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav className='navigation'>
          <p onClick={() => onRouteChange('signout')} className='nav-item'>Sign Out</p>
        </nav>
      );
    } else {
      return null;
    }
}

export default Navigation;