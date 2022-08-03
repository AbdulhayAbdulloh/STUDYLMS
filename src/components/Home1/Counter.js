import React from 'react';
import CountUp from 'react-countup';
import './Home1.css'
 function Counter() {
  return (
      <section id="counter">
            <div className="content">
                <div className="counter-item">
                     <div className="counter-item_count">
                         <h4><CountUp end={1500} duration="10"/></h4>
                         <p>COUNTRIES REACHED</p>
                    </div>
                     <div className="counter-item_count">
                         <h4><CountUp end={28000} duration="10"/></h4>
                         <p>PASSED GRADUATES</p>
                    </div>
                     <div className="counter-item_count">
                         <h4><CountUp end={750} duration="10"/></h4>
                         <p>QUALIFIED STAFF</p>
                     </div>
                     <div className="counter-item_count">
                         <h4><CountUp end={1200} duration="10"/></h4>
                         <p>COURSES PUBLISHED</p>
                    </div>
                </div>
            </div>
      </section>
  )
}
export default Counter