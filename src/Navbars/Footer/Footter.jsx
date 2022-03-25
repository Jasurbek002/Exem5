import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../Footer/Foter.scss"
import stc from "../../Assets/img/stcimg.png"
import loc from "../../Assets/img/location.png"
import email from "../../Assets/img/Mail.png"
import Phone from "../../Assets/img/phone.png"


const Footter = () => {
    return (
        <div className='Footer'>
            <div className='Footer__regis regis'>
                <Link to="/" className='regis__title'>Watchflix</Link>
                <p className='regis__text'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                <b className='regis__name'>Join Newsletters</b>
                <div className='regis__div'>
                    <input className='regis__div__input' placeholder="Insert your mail here" type="text" />
                    <button className='regis__div__btn'><img src={stc} alt="" /></button>
                </div>
            </div>
            <div className='Footer__bar'>

                <div className='Footer__bar__box box'>

                    <ul className='box__nav'>
                        <b className='box__nav__title'>Product</b>
                        <li className='box__nav__item'>
                            <NavLink to='/Home' className="box__nav__item__link">Home</NavLink>
                        </li>
                        <li className='box__nav__item'>
                            <NavLink to='/TV Show' className="box__nav__item__link">TV Show</NavLink>
                        </li>
                        <li className='box__nav__item'>
                            <NavLink to='/#' className="box__nav__item__link">Videos</NavLink>
                        </li>
                    </ul>

                    <ul className='box__nav2'>
                        <b className='box__nav2__title'>Media Group</b>
                        <li className='box__nav2__item'>Nice Studio</li>
                        <li className='box__nav2__item'>Nice News</li>
                        <li className='box__nav2__item'>Nice TV</li>
                    </ul>

                    <ul className='box__nav3'>
                        <b className='box__nav3__title'>Sitemap</b>
                        <li className='box__nav3__item'>About</li>
                        <li className='box__nav3__item'>Careers</li>
                        <li className='box__nav3__item'>Careers</li>
                    </ul>

                </div>
                
                <ul className='Footer__bar__menu menu'>
                    <a className='menu__link' href="#"><img src={loc} alt="" />8819 Ohio St. South Gate, California 90280</a>
                    <a className='menu__link' href="email:"><img src={email} alt="" />ourstudio@hello.com</a>
                    <a className='menu__link' href="tel:"><img src={Phone} alt="" />+271 386-647-3637</a>

                </ul>
            </div>
        </div>
    );
}

export default Footter;
