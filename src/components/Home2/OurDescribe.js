import React from 'react';

export default function OurDescribe() {
  return(
      <section id='our-describe'>
          <div className='content'>
            <div className='our-describe_items'>
                <div className='describe_items-elem see-video'>
                    <h4>See Video Tour</h4>
                    <video />
                    <i className='fas fa-video'></i>
                </div>
                <div className='describe_items-elem upcoming-courses'>
                    <h4>Upcoming Courses</h4>
                    <div className='courses-price'>
                        <img/>
                        <div className='courses-author'>
                            <span>Your Complate Guide to Photography</span><span>-$58.00</span>
                            <p>
                                <img/>
                                 <a>Sarah Johnson</a>
                            </p>
                        </div>
                    </div>

                    <div className='courses-price courses-price2'>
                        <img/>
                        <div className='courses-author'>
                            <span>Your Complate Guide to Photography</span><span> - Free</span>
                            <p>
                                <img/>
                                 <a>Sarah Johnson</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='describe_items-elem why-we-best'>
                    <h4>Why We Best</h4>
                    <div className='why-webest_table'>
                        <h6>Learn anything online <i className='fas fa-plus'></i></h6>
                        <h6>Basic to advance course<i className='fas fa-minus'></i></h6>
                        <p>Areas tackled the most fundamental parts of medical research
                             include cellular way and molecular biology...
                        </p>
                        <h6>Free Video Tutorials<i className='fas fa-plus'></i></h6>
                        
                    </div>
                </div>
            </div>

            </div>
      </section>
  )
}
