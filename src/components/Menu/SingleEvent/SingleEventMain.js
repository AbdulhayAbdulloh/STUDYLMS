import React from 'react';
import './SingleEvent.css'
export default function SingleEventMain() {
  return (
      <section id='single-event-main'>
           <div className='events-linkes'>
             <span>Home</span>
             <i className='fas fa-chevron-right'></i>
             <span>Events</span>
             <i className='fas fa-chevron-right'></i>
             <span>WordPress Theme Development with Bootstrap</span>
         </div>
          <div className='content'>
              <div className='single-event-main_item'>
                    <div className='single-event-main_item-left'>
                        <div className='event-main_item-left-image'>
                            <img/>
                            <div className='event-main_item-image-inform'>
                                <div className='time-menegment'>
                                    <i className='fas fa-clock'></i>
                                    <h6>START TIME:<span>MARCH 01.2017 AT 8.00 am</span></h6>
                                </div>
                                <div className='time-menegment'>
                                    <i className='fas fa-flag'></i>
                                    <h6>FINISH TIME:<span>MARCH 01.2017 AT 5.00 am</span></h6>
                                </div>
                                <div className='time-menegment'>
                                    <i className='fas fa-map'></i>
                                    <h6>ADDRESS:<span>MARCH 01.2017 AT 5.00 am</span></h6>
                                </div>
                            </div>
                        </div>
                        <div className='event-description'>
                            <h4>WordPress Theme Development with Bootsrtap</h4>
                            <h5>Event description</h5>
                            <p>Numbers say it all. Globally, progress in the wind sector continues to be 
                                strong with increasing annual installed capacity and growing investment in 
                                the sector. In 2015 alone, 63,013 megawatts  of wind power capacity was installed
                                 globally an annual market growth of 22 percent. It is continuing its progress towards
                                  becoming a mainstream, competitive and reliable power source in both developing and mature markets.
                                   In fact, wind is becoming cheap enough in many places in the U.S. and around the world to compete effectively with fossil fuels.
                            </p>
                        </div>
                        <div className='event-date'>
                            <div className='clear-time'>
                                <a>{new Date().getDate()}<span>Days</span></a>
                                <a>{new Date().getHours()}<span>Hours</span></a>
                                <a>{new Date().getMinutes()}<span>Minutes</span></a>
                                <a>{new Date().getSeconds()}<span>Seconds</span></a>
                            </div>
                            <a className='buy-ticket'>BUY TICKETS</a>
                        </div>
                        <div className='event-content'>
                            <h5>Event Content</h5>
                            <div className='event-content_item'>
                                <div className='event-content-item_title'>
                                    <a>Discuss About</a>
                                    <a>Participants</a>
                                </div>
                                <div className='event-content-item_inform'>
                                    <ul>
                                        <li><p>Thomes Edison may have been behind the invention</p></li>
                                        <li><p>Edison worked alongside partners, both financial and commercial, to get his bestinventions off the ground,</p></li>
                                        <li><p>Battling challenging cost targets and the need to build</p></li>
                                        <li><p>Partnership with a supplier or orginal aquipment manafacturer</p></li>
                                    </ul>
                                </div>
                            </div>
                            <p className='new-p'>Thomas Edison may have been behind the invention of the electric light bulb, but he did not work Edison work along side partners, both financial and commercial, to get his inventions.
                                off the ground, and without these partnerships, the light bulb as we know it today may never have taken.
                                off in the way that it did—and he’s not the only one. Some of the world's most effective business models and companies have been forged through complementary and long-standing partnerships, 
                                resulting in products and services that have defined completely new industries.</p>
                        </div>
                        <div className='event-content-image'>
                            <img/>
                        </div>
                        <div className='event-content_social-network'>
                            <p><b>Tags: </b> Online,App Development</p>
                            <div className='social-network_elems'>
                                <a><i className='fab fa-facebook'></i></a>
                                <a><i className='fab fa-twitter'></i></a>
                                <a><i className='fab fa-google'></i></a>
                                <a><i className='fas fa-plus'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='single-event-main_item-right'>
                         <div className='courses-list_category'>
                            <div className='courses-search'>
                                <input type="search" placeholder='Search...'/>
                                <i className='fas fa-search'></i>
                            </div>
                            <h4>COURSE CATEGORYS</h4>
                            <div className='courses-name_list'>
                                <a>Businnes</a>
                                <a>Design</a>
                                <a>Programing Language</a>
                                <a>Photography</a>
                                <a>Language</a>
                                <a>Live Style</a>
                                <a>IT & Software</a>
                            </div>
                            {/* <h4>COURSE INTRO</h4>
                            <div className='courses-video'>
                                <video/>
                                <i className='fas fa-play'></i>
                            </div> */}
                            <h4>POPULAR COURSES</h4>
                            <div className='popular-courses2'>
                                <div className='popular-courses_elem'>
                                    <img/>
                                    <h6>Your Complete Guide to Photography<span>$99.00</span></h6>
                                </div>
                                <div className='popular-courses_elem'>
                                    <img/>
                                    <h6>Introduction to Mobile Apps Development<span className='free'>FREE</span></h6>
                                </div>
                                <div className='popular-courses_elem'>
                                    <img/>
                                    <h6>How to Become Startup Founder<span>$45.60</span></h6>
                                </div>
                                <h4>TAGS</h4>
                                <div className='single-course-tags'>
                                    <a>Future</a>
                                    <a>Sciense</a>
                                    <a>Coding</a>
                                    <a>Education</a>
                                    <a>Technology</a>
                                </div>
                                <h4>ARCHIVES</h4>
                                <select value="math select">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>Jule</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>Oktober</option>
                                    <option>November</option>
                                </select>
                            
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </section>
  )
}
