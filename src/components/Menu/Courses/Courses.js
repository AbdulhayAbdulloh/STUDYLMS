import React from 'react';
import './Courses.css'
import CoursesList from './CoursesList';
import CoursesTitle from './CoursesTitle';
export default function Courses() {
  return (
     <div>
        <CoursesTitle/>
        <CoursesList/>
     </div>
  )
}
