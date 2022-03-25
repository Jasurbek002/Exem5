import React, { useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import "../Navbars/Navbar.scss"
import serchImg from "../Assets/img/serchimg.webp"
import imgS from "../Assets/img/btnS.png"
import manimg from "../Assets/img/Manimg.jpg"
import LogImg from "../Assets/img/ExetBtn.png"

const Navbar = () => {
  const [state,setState] = useState(false)
  useEffect(()=>{

  },[setState])
  const Logouthenler =()=>{
      localStorage.clear()
  }
    return (
        <div  className='Header'>
           <Link to="/Home" className='Header__logo'>Watchflix</Link>
           <ul className='Header__navbar nav'>
               <li className='nav__item'>
               <NavLink to="/Home" className={(props) =>props.isActive ?"nav__item__link--active" : "nav__item__link"} >Home</NavLink>
               </li>
               <li className='nav__item'>
               <NavLink to="/Movies" className={(props) =>props.isActive ?"nav__item__link--active" : "nav__item__link"} >Movies</NavLink>
               </li>
               <li className='nav__item'>
               <NavLink to="/Tvshov" className={(props) =>props.isActive ?"nav__item__link--active" : "nav__item__link"} >TV Shov</NavLink>
               </li>
           </ul>
           {
               state ? <div className='Header__Serch'>
               <input placeholder='Enter search phrase..' className='Header__Serch__input' type="search" />
               <button className='Header__Serch__btn'><img className='icons ' src={serchImg}  alt="" /></button>
               </div> :    <button onClick={()=>{setState(true)}}   className='Header__imputbtn'><img className='Header__imputbtn__img' src={imgS} alt="" /></button>
           }
           
           <div className='Header__Avatar'>
               <img className='Header__Avatar__img' src={manimg} alt="" />
               <h3 className='Header__Avatar__title'>Jon Doe</h3>
           </div>
          
          <button onClick={Logouthenler} className='Header__Log'><img src={LogImg} alt="" /> Logout</button>

        </div>
    );
}

export default Navbar;
