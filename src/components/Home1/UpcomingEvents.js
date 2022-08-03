import React from 'react';

function UpcomingEvents() {
  return (
      <section id="upcoming-events">
          <div className="content">
            <div className="upcoming-title">
                <div>
                    <h3>Upcoming Events</h3>
                    <p>Recent and upcoming educational events listed here</p>
                </div>
                <div className="view-more"> 
                    <a>VIEW MORE</a>
                </div>
            </div>
            <div className="upcoming-events_item">
                <div className="events-courses">
                    <div className='courses-date'>
                        <span>01</span><span>MARCH</span><br/>
                        <span>WEDNESDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>WordPreqss Theme Development with Bootstrap</h5>
                        <p>8:00 am - 5:00 pm | Great Russell Street, WC1B 3DG UK</p>
                        <a>REGISTER</a>
                    </div>
                    <div className='courses-image' >
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>01</span><span>MARCH</span><br/>
                        <span>WEDNESDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>WordPreqss Theme Development with Bootstrap</h5>
                        <p>8:00 am - 5:00 pm | Great Russell Street, WC1B 3DG UK</p>
                        <a>REGISTER</a>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>

                <div className="events-courses">
                    <div className='courses-date'>
                        <span>01</span><span>MARCH</span><br/>
                        <span>WEDNESDAY</span>
                    </div>
                    <div className='courses-name'>
                        <h5>WordPreqss Theme Development with Bootstrap</h5>
                        <p>8:00 am - 5:00 pm | Great Russell Street, WC1B 3DG UK</p>
                        <a>REGISTER</a>
                    </div>
                    <div className='courses-image'>
                        <img/>
                    </div>
                </div>
            </div>
          </div>
      </section>
  )
}
export default UpcomingEvents