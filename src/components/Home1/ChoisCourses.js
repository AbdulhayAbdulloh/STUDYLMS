import React from 'react';

export default function ChoisCourses() {
  return (
      <section id="choise-courses">
          <div className='content'>
            <div className='choise-courses_item'>
                <div className='courses_item-icons'>
                    <a><i className="fas fa-play"></i>Business</a>
                </div>
                <div className='courses_item-icons'>
                    <a><i className="fas fa-book"></i>LANGUAGE</a>
                </div>
                <div className='courses_item-icons'>
                    <a><i className="fas fa-music"></i>PROGRAMMING</a>
                </div>
                <div className='courses_item-icons'>
                    <a><i className="fas fa-camera"></i>FILM & VIDIO</a>
                </div>
                <div className='courses_item-icons'>
                    <a><i className="fas fa-phone"></i>PHOTOGRAPY</a>
                </div>
                <div className='courses_item-icons'>
                    <a><i className="fas fa-brush"></i>WEB DESIGN</a>
                </div>
            </div>
          </div>
      </section>
  )
}
