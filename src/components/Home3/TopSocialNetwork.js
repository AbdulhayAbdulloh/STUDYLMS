import React from 'react';
import './Home3.css'
export default function TopSocialNetwork() {
  return (
      <section id='top-social-network'>
          <div className='content'>
             <div className='top-social-network_item'>
                <p>Studylms | { new Date().getFullYear() } DesiginFalls,All right reserved</p>
                <div className='social-network2'>
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
