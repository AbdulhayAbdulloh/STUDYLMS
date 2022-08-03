import React from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Home1Main from './Home1Main';
import Previous from './Previous';
import PopularCourses from './PopularCourses';
import Counter from './Counter';
import UpcomingEvents from './UpcomingEvents';
import SearchCourse from './SearchCourse';
import ChoisCourses from './ChoisCourses';
import CoachTraining from './CoachTraining';
import AboutPerson from './AboutPerson';
import RecentNews from './RecentNews';
import EnterEmail from './EnterEmail';
import Footer from '../Footer/Footer';

function Home1() {
  return (
    <div>
        {/* <Previous/>
        <Header/> */}
        <Home1Main/>
        <PopularCourses/>
        <Counter/>
        <UpcomingEvents/>
        <SearchCourse/>
        <ChoisCourses/>
        <CoachTraining/>
        <AboutPerson/>
        <RecentNews/>
        <EnterEmail/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home1
