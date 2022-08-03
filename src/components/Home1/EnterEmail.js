import React from 'react';

export default function EnterEmail() {
  return (
      <section id='enter-email'>
          <div className='content'>
                <div className='enter-email_item'>
                    <div className='email_item-collect'>
                        <a><i className='fa fa-envelope-open-text'></i></a>
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
