import React from 'react';

export default function ContactMain() {
  return(
      <section id='contact-main'>
          <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Contact</span>    
          </div>
          <div className='content'>
              <div className='contact-main_item'>
                    <div className='contact-main_item-title'>
                        <h4>Contact Details</h4>
                        <p>Welcome to our Website. We are glad to have you around.</p>
                        <span></span>
                    </div>
                    <div className='contact-main_item-detail'>
                        <div className='contact-main_item-detail_elem'>
                            <a><i className='fas fa-mobile'></i></a>
                            <h5>GIV US A CALL<span>+61(800) 659-2684,+61(800) 659-5214</span></h5>
                        </div>
                        <div className='contact-main_item-detail_elem'>
                            <a><i className='fas fa-envelope'></i></a>
                            <h5>SEND US A MESSAGE<span>Exempled@cynmbrms.com</span></h5>
                        </div>
                        <div className='contact-main_item-detail_elem'>
                            <a><i className='fas fa-envelope-open-text'></i></a>
                            <h5>VISIT OUR LOCATION<span>9015 Sunset Boulevard United Kingdom</span></h5>
                        </div>
                    </div>
                    <h6>OR</h6>
                    <div className='contact-main_drop-message'>
                            <h4>Drop Us a Message</h4>
                            <div className='contact-main_drop-message-enter'>
                                <input type='text' placeholder='Name'/>
                                <input type='email' placeholder='Email'/>
                            </div>
                            <div className='contact-main_drop-message-enter2'>
                                <textarea placeholder='Message'/>
                            </div>
                            <a>SEND MESSAGE</a>
                    </div>
              </div>
          </div>
      </section>
  )
}
