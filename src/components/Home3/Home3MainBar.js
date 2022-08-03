import React from 'react';
import { Link } from 'react-router-dom';
import './Home3.css'
export default function Home3MainBar() {
  return (
     <section id="main-bar">
         <div className="content">
            <div className="main-bar_items">
                    <div className="nav-bar_elem">
                        <li><Link to='*'>home</Link></li>
                        <li><Link to='courses'>courses</Link></li>
                        <li><a href="#">events</a></li>
                        <li><a href="#">pages</a></li>
                        <li><a href="#">featured</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">shop</a></li>
                        <li><a href="#">contact</a></li>
                        <li><a href="#"><i className="fas fa-search"></i></a></li>
                </div>
                <div className="top-register2">
                    <a>Login</a>
                    <a>Register</a>
                </div>
            </div>
        </div>
    </section>
  )
}
