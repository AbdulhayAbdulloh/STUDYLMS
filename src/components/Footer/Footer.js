import React from 'react';
import './Footer.css'
export default function Footer() {
  return (
      <section id='footer'>
        <div className='content'>
            <div className='footer-item'>
                <div className='footer-logo'>
                    <a><i className="fa fa-book"></i>STUDYLMS</a>
                    <p>We have over 20 years experience providing expert Educational both businesses 
                        and individuals. Our Investment Committee brings cades the industry expertise 
                        in driving our investment approach.
                    </p>
                    <a className='learning'>START LEARNING NOW</a>
                </div>

                <div className='footer-courses'>
                    <h4>Popular courses</h4>
                    <div className='popular-courses'>
                        <img/>
                        <p>Introduction to Mobile<br/> Apps Development<br/><span>$99.00</span></p>
                    </div>
                    <div className='popular-courses'>
                        <img/>
                        <p>Become a Professional<br/> Film Marker<br/><span className='free'>FREE</span></p>
                    </div>
                    <div className='popular-courses'>
                        <img/>
                        <p>Swift Programming<br/> For beginner<br/><span>$75.00</span></p>
                    </div>
                </div>

                <div className='footer-link'>
                    <h4>QUICK LINK </h4>
                    <ul>
                        <li><a>All Courses</a></li>
                        <li><a>Summer Session</a></li>
                        <li><a>React Exams</a></li>
                        <li><a>Professional Courses</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms of Use</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>  
                <div className='footer-contact'>
                    <h4>Contact us</h4>
                    <p>If you want to contact us about any issue our support
                         available to help you 8am-7pm Monday to saturday.
                    </p>
                     <a><i className='fas fa-map'></i><span><b>Adress: </b>9015 Sunset Namangan United Uzbekistan</span></a><br/>
                     <a> <i className='fas fa-phone'></i><span><b>Call:</b>+215 623 7532</span></a><br/>
                     <a><i className='fas fa-desktop'></i><span><b>Email:</b>info@Studylms.com</span></a><br/>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Studylms | { new Date().getFullYear() } DesiginFalls,All right reserved</p>
                <div className='social-network'>
                    <a><i className='fab fa-facebook'></i></a>
                    <a><i className='fab fa-twitter'></i></a>
                    <a><i className='fab fa-instagram'></i></a>
                    <a><i className='fab fa-telegram'></i></a>
                </div>
            </div>
        </div>
      </section>
  )
}
