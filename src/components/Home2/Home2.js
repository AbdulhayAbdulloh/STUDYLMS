import React from 'react';
import Header from '../Header/Header';
import Previous from '../Home1/Previous';
import '../Home1/Home1.css'
import './Home2.css'
import LearnToday from './LearnToday';
import CourseGallery from './CourseGallery';
import PopularCourses from '../Home1/PopularCourses';
import ChoisCourses from '../Home1/ChoisCourses';
import ClassesWork from './ClassesWork';
import Home2RecentNews from './Home2RecentNews';
import NewStudent from './NewStudent';
import OurInstrctors from './OurInstrctors';
import AboutPerson2 from './AboutPerson2';
import OurDescribe from './OurDescribe';
import EnterEmail2 from './EnterEmail2';
import Footer from '../Footer/Footer';


function Home2() {
  return (
        <div>
            <Previous/>
            <Header/>
            <LearnToday/>
            <CourseGallery/>
            <PopularCourses/>
            <ChoisCourses/>
            <ClassesWork/>
            <Home2RecentNews/>
            <NewStudent/>
            <OurInstrctors/>
            <AboutPerson2/>
            <OurDescribe/>
            <EnterEmail2/>
            <Footer/>
        </div>
  )
}
export default Home2