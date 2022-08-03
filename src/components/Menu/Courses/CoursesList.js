import React from 'react';
import Card3 from '../../Card3/Card3';
export default function CoursesList() {
  return (
        <section id='courses-list'>
          <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Courses</span>    
          </div>
            <div className='content'>
             
                <div className='courses-list_item'>
                    <div className='courses-list_card'>
                    <div className='showing-title'>
                  <span>Showing 1-9 of 15 result</span>
                  <a>All Courses <i className='fas fa-chevron-down'></i></a>
                    </div>
                        <Card3 count="$99.00" title="French for Beginners to Advenved Training" name="Keny White" personNumber="98" personList="10"/>
                        <Card3 count="FREE" title="Introduction to Mobile Apps Development" name="Sarah Jhonson" personNumber="150" personList="2"/>
                        <Card3 count="$85.60" title="How to Become a Startup Founder" name="Jhon Milton" personNumber="200" personList="3"/>
                        <Card3 count="$68.00" title="Your Complate Guide to Self Development" name="Peter Parker" personNumber="48" personList="5"/>
                        <Card3 count="$68.00" title="Your Complate Guide to Self Development" name="Peter Parker" personNumber="48" personList="5"/>    
                        <Card3 count="$89.00" title="Adobe inDeign CS6 Tutorial Beginners" name="Ans Neversity" personNumber="95" personList="12"/>
                        <Card3 count="$55.00" title="Svift Programming for Beginner" name="Logansee Wok " personNumber="124" personList="7"/>
                        <Card3 count="FREE" title="Become a Professional Film Marker" name="Kilinton DK " personNumber="120" personList="4"/>
                        <Card3 count="$75.00" title="Brending like a professional in 10 days " name="Don Cooper" personNumber="35" personList="1"/>
                    </div>
                  <div className='courses-list_category'>
                    <h4>COURSE SEARCH</h4>
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
                    <h4>COURSE INTRO</h4>
                    <div className='courses-video'>
                        <video/>
                        <i className='fas fa-play'></i>
                    </div>
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
                    </div>
                  </div>
                </div>
                <div className='coureses-list_next'>
                    <div className='next-previuse'>
                        <a>1</a>
                        <a>2</a>
                        <a className='fas fa-chevron-right'></a>
                    </div>
                </div>
            </div>
        </section>
  )
}
