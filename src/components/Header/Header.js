import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

 function Header() {
  const {showSubmenu,setSubmenu} = useState(false)
  return(
    <section id="header">
        <div className="content">
           <div className="header-items">
            <div className="logo">
                    <a><i className="fa fa-book"></i>STUDYLMS</a>
                </div>
                <div className="nav-bar">
                    <li><Link to='*'>home </Link>
                     <div className='header-sub-menu'>
                              <Link to='about'>About Us</Link>
                              <Link to='istructors'>Istructor</Link>
                              <Link to='forumn'>Forumn</Link>
                              <Link to='my-account'>My Account</Link>
                              <Link to='404-error'>404 Error</Link>
                              <Link to='coming-soon'>Coming Soon</Link>
                        </div>
                    </li>
                    <li><Link  to='courses'>courses</Link></li>
                    <li><Link to='event'>events</Link></li>
                    <li><Link to='cart-page'>pages</Link></li>
                    <li><a href="#">featured</a></li>
                    <li><Link to='blog'>blog</Link></li>
                    <li><Link to='shop'>shop</Link></li>
                    <li><Link to='contact'>contact</Link></li>
                    <li><a href="#"><i className="fas fa-search"></i></a></li>
             </div>
           </div>
        </div>
    </section>
  )
}
export default Header
