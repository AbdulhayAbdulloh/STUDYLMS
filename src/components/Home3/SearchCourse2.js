import React from 'react';
import './Home3.css'
import '../Home1/Home1.css'
export default function SearchCourse2() {
  return (
      <section id="search-course2">
          <div className='content'>
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
                <p>Learn technology, creative and business skills you can use today.</p>
          </div>
      </section>
  )
}
