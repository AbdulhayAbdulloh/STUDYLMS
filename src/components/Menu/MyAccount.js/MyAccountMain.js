import React from 'react';

export default function MyAccountMain() {
  return(
      <section id='myAccount-main'>
           <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>My Account</span>    
          </div>
          <div className='content'>
                <div className='myAccount-main_item'>
                    <div className='myAccount-main_item-register'>
                        <h6>Login Form</h6>
                        <input type="email" placeholder='Username or email address *'/>
                        <input type="password" placeholder='Password'/>
                        <div className='myAccount-main_item-login'>
                            <div className='myAccount-main_item-check'>
                                <a>LOGIN</a>
                                <input type="checkbox" /><label>Remember me</label>
                            </div>
                            <a>Lost your Password?</a>
                        </div>
                    </div>

                    <div className='myAccount-main_item-register'>
                        <h6>Register Form</h6>
                        <input type="email" placeholder='Email address *'/>
                        <input type="password" placeholder='Password *'/>
                        <div className='myAccount-main_item-login'>
                            <div className='myAccount-main_item-check'>
                                <a>REGISTER</a>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </section>
  )
}
