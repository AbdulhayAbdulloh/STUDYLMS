import React from 'react';
import { Link } from 'react-router-dom';

function EventMain() {
  return (
      <section id="upcoming-events2">
         <div className='events-linkes'>
             <span>Home</span><i className='fas fa-chevron-right'></i><span>Events</span>
         </div>
          <div className="content">
            <div className="upcoming-events_item">
                <div className="events-courses">
                    <div className='courses-date'>
                        <span>01</span><span>MARCH</span><br/>
                        <span>WEDNESDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>WordPress Theme Development with Bootstrap</h5>
                        <p>8:00 am - 5:00 pm | Great Russell Street, WC1B 3DG UK</p>
                        <Link to="single-event">REGISTER</Link>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>05</span><span>MARCH</span><br/>
                        <span>SATURDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>Build Apps with React Native</h5>
                        <p>12:00 pm - 5:00 pm | No1 Warehouse London, UK</p>
                        <Link to="single-event">REGISTER</Link>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>13</span><span>MARCH</span><br/>
                        <span>THURSDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>The Complete Android & Java Developer</h5>
                        <p>4:00 pm - 8:00 pm | 21 New Globe Walk London, UK</p>
                        <Link to="single-event">REGISTER</Link>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>18</span><span>MARCH</span><br/>
                        <span>SATURDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>Free Yoga CLass at Every Morning</h5>
                        <p>8:00 am - 5:00 pm | Great Russell Street, WC1B 3DG UK</p>
                        <Link to="single-event">REGISTER</Link>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>22</span><span>MARCH</span><br/>
                        <span>SATURDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>Learn Network Webinar for Muisec Teachers</h5>
                        <p>12:00 pm - 5:00 pm | No1 Warehouse London, UK</p>
                        <Link to="single-event">REGISTER</Link>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>02</span><span>APRIL</span><br/>
                        <span>TUESDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>Digital Marketing Breafing:Viyalosla 2017</h5>
                        <p>4:00 pm - 8:00 pm | 21 New Globe Walk London, UK</p>
                        <Link to="single-event">REGISTER</Link>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>13</span><span>APRIL</span><br/>
                        <span>THURSDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>Edicational School Technology</h5>
                        <p>12:00 pm - 5:00 pm | No1 Warehouse London, UK</p>
                        <Link to="single-event">REGISTER</Link>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>
                <div className='next-step'>
                    <a>1</a>
                    <a>2</a>
                    <a><i className='fas fa-chevron-right'></i></a>
                </div>
            </div>
          </div>
      </section>
  )
}
export default EventMain