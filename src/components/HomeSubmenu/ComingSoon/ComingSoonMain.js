import React from 'react';

export default function ComingSoonMain() {
  return (
      <section id='coming-soon-main'>
          <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>404 Error</span>    
          </div>
          <div className='content'>
             <div className='coming-soon-main_item'>
                   <div className='coming-soon-main_item-title'>
                        <h4>It's limeted seating! Hurry up</h4> 
                        <span></span>
                   </div>
                   <div className='coming-soon-main_item-date'>
                         <div className='coming-soon-main_item-date-elem' >
                             <a>{new Date().getDate()}</a>
                             <span>Days</span>
                         </div>
                         <div className='coming-soon-main_item-date-elem' >
                             <a>{new Date().getHours()}</a>
                             <span>Hours</span>
                         </div>
                         <div className='coming-soon-main_item-date-elem' >
                             <a>{new Date().getMinutes()}</a>
                             <span>Minites</span>
                         </div>
                         <div className='coming-soon-main_item-date-elem' >
                             <a>{new Date().getSeconds()}</a>
                             <span>Seconds</span>
                         </div>
                   </div>
                   <p>Our website is under construction. We’ll be here soon with our new awesome site. Get best experience with this one.</p>
                    <div className='coming-soon-main_item-emil'>
                         <input type='text' placeholder='Email Address'/>
                         <a>SUBSCRIBE</a>
                    </div>
             </div>
          </div>
      </section>
  )
}
