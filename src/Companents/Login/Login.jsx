import React from 'react';
import "../Login/Login.scss"
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navgate =  useNavigate()
    const {state:{returnUrl}} = useLocation()
    const HendlerSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('token',"login parol")
        if(returnUrl){
            navgate(`${returnUrl.pathname}${returnUrl.search}`,{
                state:{
                    message:"tayyor"
                }
            })
        }
    }
    return (
       <div className='Login__style'>
            <form onSubmit={HendlerSubmit} className='Login'>
            <h3 className='Login__title'>Free UI Kit</h3>
            <h1 className='Login__name'>Film & TV</h1>
            <input placeholder='Login' className='Login__email' type="text" />
            <input placeholder='Password' className='Login__pass' type="password" />
            <button className='Login__btn' type='submit'>Login</button>
        </form>
       </div>
    );
}

export default Login;
