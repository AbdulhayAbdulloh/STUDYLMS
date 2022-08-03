    import React from 'react';
    import './Home3.css'
    export default function PricingDetails() {
      return (
          <section id='pricing-details'>
              <div className='content'>
                <div className='popular-courses2_title pricing-details_title'>
                        <h3>Pricing Details</h3>
                        <p>Troll poker face derp cuteness overload happy charlie sheen bear.</p>
                        <span></span>
                </div>
                <div className='pricing-details_item'>
                    <div className='details_item-elem'>
                        <div className='details_item-elem_inform'>
                            <h6>SMALL GROUP</h6>
                            <a className='circle-icons'><i className='fas fa-address-card'></i></a>
                            <h4>$149<span>/Year</span></h4>
                            <div className='pricing-details_property'>
                                <a>One year full access</a>
                                <a>Video Lessons</a>
                                <a>Limeted Material</a>
                            </div>
                            <button>REGISTER</button>
                        </div>
                    </div>
                    <div className='details_item-elem'>
                    <div className='details_item-elem_inform'>
                            <h6>SMALL GROUP</h6>
                            <a className='circle-icons'><i className='fas fa-wallet'></i></a>
                            <h4>$149<span>/Year</span></h4>
                            <div className='pricing-details_property'>
                                <a>One year full access</a>
                                <a>Video Lessons</a>
                                <a>Limeted Material</a>
                            </div>
                            <button>REGISTER</button>
                        </div>
                    </div>
                    <div className='details_item-elem'>
                    <div className='details_item-elem_inform'>
                            <h6>SMALL GROUP</h6>
                            <a className='circle-icons'><i className='fas fa-laptop'></i></a>
                            <h4>$149<span>/Year</span></h4>
                            <div className='pricing-details_property'>
                                <a>One year full access</a>
                                <a>Video Lessons</a>
                                <a>Limeted Material</a>
                            </div>
                            <button>REGISTER</button>
                        </div>
                    </div>
                </div>
              </div>
          </section>
      )
    }
    