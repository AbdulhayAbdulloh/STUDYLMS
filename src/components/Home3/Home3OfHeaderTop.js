import React from 'react';
import './Home3.css'
export default function Home3OfHeaderTop() {
  return(
      <section id='header-top'>
          <div className='content'>
              <div className='header-top_items'>
                    <div className='header-top_logo'>
                        <h2><i className='fas fa-book'></i>STUDYLMS</h2>
                    </div>
                    <div className='header-top-connect'>
                        <div className='top-connect_elem'>
                            <i className='fas fa-phone'></i>
                            <h6>Call Us:<span>(+61) 123-456-7890</span></h6>
                        </div>
                        <div className='top-connect_elem'>
                            <i className='fas fa-envelope'></i>
                            <h6>Eamil Us:<span>(Example@dominan.com</span></h6>
                        </div>
                        <div className='top-connect_elem'>
                            <i className='fas fa-map'></i>
                            <h6>Location:<span>9015 Sensert Street Balukg.UK</span></h6>
                        </div>
                    </div>
              </div>
          </div>
      </section>
  )
}
