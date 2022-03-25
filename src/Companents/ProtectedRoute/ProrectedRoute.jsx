import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProrectedRoute = ({childrean}) => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/auth/Login',{
                replace:false,
                state:{
                    returnUrl:location
                }
            })
        }
        console.log(location)
    },[location,navigate])
    return (
        <>
           {
               childrean
           } 
        </>
    );
}

export default ProrectedRoute;
