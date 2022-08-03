import React from 'react';

export default function ErrorMain() {
  return(
      <section id='error-main'>
          <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Coming Soon</span>    
          </div>
          <div className='content'>
             <div className='error-main_item'>
                <div className='error-main_item-title'>
                    <h3>Page Not Found!</h3>
                    <p>Sorry, We couldn't find the page you're looking for. Try returning to the Homepage</p>
                    <div className='found404'>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                        <span>!</span>
                    </div>
                </div>
             </div>
          </div>
      </section>
  )
}
