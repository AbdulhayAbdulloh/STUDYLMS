import React,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Error from '../HomeSubmenu/404Error/404Error';
import ComingSoon from '../HomeSubmenu/ComingSoon/ComingSoon';
import Forumn from '../HomeSubmenu/Forumn/Forumn';
import Instructors from '../HomeSubmenu/Instructors/Instructors';
import SingleForumn from '../HomeSubmenu/SingleForumn/SingleForumn';
import SingleInstructor from '../HomeSubmenu/SingleInstructor/SingleInstructor';
import About from '../Menu/About/About';
import Blog from '../Menu/Blog/Blog';
import CartPage from '../Menu/CartPage/CartPage';
import Contact from '../Menu/Contact/Contact';
import Courses from '../Menu/Courses/Courses';
import Event from '../Menu/Events/Event';
import MyAccount from '../Menu/MyAccount.js/MyAccount';
import Shop from '../Menu/Shop/Shop';
import SingleBlog from '../Menu/SingleBlog/SingleBlog';
import SingleCourse from '../Menu/SingleCourse/SingleCourse';
import SingleEvent from '../Menu/SingleEvent/SingleEvent';
import SingleShop from '../Menu/SingleShop/SingleShop';
import Home1 from './Home1';
import Previous from './Previous';

export default function Routing1() {
    const [item, setItem] = useState(true)

    useEffect(()=>{
        setItem(false)
    },[item])
    
  return (
      <div>
          <Previous/>
          <Header/>
                <Routes>
                    <Route path='*'  element={<Home1/>}/>
                    <Route path='/courses'  element={<Courses/>}/>
                    <Route path='/courses/singlecourse'  element={<SingleCourse/>}/>
                    <Route path='/event'  element={<Event/>}/>
                    <Route path='/event/single-event'  element={<SingleEvent/>}/>
                    <Route path='/blog'  element={<Blog/>}/>
                    <Route path='/blog/single-blog'  element={<SingleBlog/>}/>
                    <Route path='/about'  element={<About/>}/>
                    <Route path='/contact'  element={<Contact/>}/>
                    <Route path='/my-account'  element={<MyAccount/>}/>
                    <Route path='/istructors'  element={<Instructors/>}/>
                    <Route path='/istructors/sigle-instructor'  element={<SingleInstructor/>}/>
                    <Route path='/forumn'  element={<Forumn/>}/>
                    <Route path='/forumn/single-forumn'  element={<SingleForumn/>}/>

                    <Route path='/shop'  element={<Shop/>}/>
                    <Route path='/shop/single-shop'  element={<SingleShop/>}/>

                    <Route path='/cart-page'  element={<CartPage/>}/>

                    <Route path='/coming-soon'  element={<ComingSoon/>}/>

                    <Route path='/404-error'  element={<Error/>}/>
           
                </Routes>
          <Footer/>
      </div>
  )
}
