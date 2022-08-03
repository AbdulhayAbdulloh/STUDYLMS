import React from 'react';
import TopSocialNetwork from './TopSocialNetwork';
import Home3OfHeaderTop from './Home3OfHeaderTop';
import Home3MainBar from './Home3MainBar';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home3 from './Home3';
import Courses from '../Menu/Courses/Courses';
import SingleCourse from '../Menu/SingleCourse/SingleCourse';

export default function Routing3() {
  return (
      <div>
           <TopSocialNetwork/>
           <Home3OfHeaderTop/>
           <Home3MainBar/>

            <Routes>
                <Route path='*'  element={<Home3/>}/>
                <Route path='/courses'  element={<Courses/>}/>
                <Route path='/courses/singlecourse'  element={<SingleCourse/>}/>
            </Routes>

          <Footer/>
      </div>
  )
}
