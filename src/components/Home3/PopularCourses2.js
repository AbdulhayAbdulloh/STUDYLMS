import React from 'react';
import Card2 from '../Card2/Card2';
import './Home3.css'
export default function PopularCourses2() {
  return (
      <section id='popular-courses2'>
          <div className='content'>
              <div className='popular-courses2_title'>
                    <h3>Most Popular Course</h3>
                    <p>Games megusta dad avengers note rainbow dead crying venenatis.</p>
                    <span></span>
              </div>
             <div className='popular-courses2_items'>
                  <Card2 count="$99.00" title="French for Beginners to Advenved Training" name="Keny White" personNumber="98" personList="10"/>
                  <Card2 count="FREE" title="Introduction to Mobile Apps Development" name="Sarah Jhonson" personNumber="150" personList="2"/>
                  <Card2 count="$85.60" title="How to Become a Startup Founder" name="Jhon Milton" personNumber="200" personList="3"/>
                  <Card2 count="$68.00" title="Your Complate Guide to Self Development" name="Peter Parker" personNumber="48" personList="5"/>
                  
                  <Card2 count="$89.00" title="Adobe inDeign CS6 Tutorial Beginners" name="Ans Neversity" personNumber="95" personList="12"/>
                  <Card2 count="$55.00" title="Svift Programming for Beginner" name="Logansee Wok " personNumber="124" personList="7"/>
                  <Card2 count="FREE" title="Become a Professional Film Marker" name="Kilinton DK " personNumber="120" personList="4"/>
                  <Card2 count="$75.00" title="Brending like a professional in 10 days " name="Don Cooper" personNumber="35" personList="1"/>
             </div>
             <div className='view-all-courses'>
                 <a>View All Course</a>
             </div>
          </div>
      </section>
  )
}
