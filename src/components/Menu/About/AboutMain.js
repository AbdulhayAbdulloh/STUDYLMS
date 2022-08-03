import React from 'react';

export default function AboutMain() {
  return(
      <section id='about-main'>
           <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>About</span>    
          </div>
          <div className='content'>
             <div className='about-main-item'>
                 <div className='about-main-item_title'>
                     <h5>Before we get ahead of ourselves, we want to welcome you to here.</h5>
                     <p>Fusce eleifend donec sapien sed phase lusa. Pellentesque lacus vamus lorem 
                        arcu semper duiacCras ornare arcu avamus nda leo. Etiam ind arcu morbi usol 
                        justo mauris tempus pharetra interdum at congue semper purus. acus vamu
                        lorem arcu semper duiacCras ornare arcu. Edison worked alongside partners, 
                        both financial and commercial, 
                    </p>
                    <ul>
                        <li><p>Thomas Edison may have been behind the invention.</p></li>
                        <li><p>Edison worked alongside partners, both financial and commercial, to get his best inventions off the ground,</p></li>
                        <li><p>Battling challenging cost targets and the need to build.</p></li>
                        <li><p>Partnership with a supplier or original equipment manufacturer..</p></li>
                    </ul>
                 </div>
                <div className='about-main-item-image'>
                    <img/>
                </div>
             </div>
          </div>
      </section>
  )
}
