import React from 'react';
import './Home1.css'
 function Previous() {
  return (
    <section id="top-header">
        <div className="content">
           <div className="top-header_items">
            <div className="top-contact">
                    <h5>Call:<span> +(61) 123 456 7890</span></h5>
                    <h5>Email:<span>Example@domain.com</span></h5>
                </div>
                <div className="top-register">
                    <a>Login</a>
                    <a>Register</a>
                </div>
           </div>
        </div>
    </section>
  )
}
export default Previous
