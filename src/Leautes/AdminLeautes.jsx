import React from 'react';
import { Outlet } from 'react-router-dom';
import Footter from '../Navbars/Footer/Footter';
import Navbar from '../Navbars/Navbar';

const Adminleautes = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
             <Footter />
        </div>
    );
}

export default Adminleautes;
