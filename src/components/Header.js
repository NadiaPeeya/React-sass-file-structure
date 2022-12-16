
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets1/Group 11 (1).png';


const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className='nav-design'>
                <div className='logo'>
                    <Link className='zou' to="/">
                     <img src={logo} alt="" />
                    </Link>
                        
                        </div>
                <ul className='ul-items'>
                    <li className='li-items'>
                        <Link to='/home'>Home</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/team'>Team</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    </ul>
                </div>
           
                 

                        <div className="right">
                       
                           <div className="right-buttons">

                       
                            <button>
                            <Link to="/sign-up">Sign Up</Link>
                            </button>

                       
                            </div> 
                        </div>
            </nav>
            
        </div>
    );
};

export default Header;