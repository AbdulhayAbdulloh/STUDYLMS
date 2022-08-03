import React from 'react';
import Home1 from './Home1';
import './Home1.css'
export default function SearchCourse() {
  return (
      <section id="search-course">
          <div className='content'>
            <h5>Seach for Course</h5>
                <div className='search-course_option'>
                    <div className="course_option-select">
                        <a>Category</a>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="course_option-select">
                        <a>Course Cost</a>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="course_option-select">
                        <a>Search Text</a>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <a className='course_option-search'>SEARCH</a>
                </div>
          </div>
      </section>
  )
}
