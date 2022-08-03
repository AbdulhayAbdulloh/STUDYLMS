import React from 'react';
import './Home2.css'
export default function EnterEmail2() {
  return (
      <section id='enter-email2'>
          <div className='content'>
                <div className='enter-email_item enter-email_item2'>
                    <div className='email_item-collect email_item-collect2'>
                        <a><i className='fa fa-book'></i></a>
                        <h4>Signup for Newsletter<span>Subscribe now and receive weekly newsletter with new updates.</span></h4>
                    </div>
                    <div className='email_item-write'>
                        <input type="text" placeholder='Enter your email . . .'/>
                        <button>SUBMIT</button>
                    </div>
                </div>
          </div>
      </section>

  )
}
