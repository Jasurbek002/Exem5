import React from 'react';

import "./Nonavbar.scss"
const Nonavbar = () => {
    return (
        <div className='Nonavbar'>
            <h1 className='Nonavbar__logo' to="auth/Login" >Watchflix</h1>
            <h4 className='Nonavbar__link' to="#" >Login</h4>
        </div>
    );
}

export default Nonavbar;
