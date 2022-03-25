import React from 'react';
import { Outlet } from 'react-router-dom';
import Nonavbar from '../Navbars/NoNavbar';

const Noadminleautes = () => {
    return (
        <div>
            <Nonavbar />
            <Outlet />
        </div>
    );
}

export default Noadminleautes;
