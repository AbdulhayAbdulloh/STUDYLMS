import React from 'react';
import Card from '../Card/Card';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import './Home1.css'
import img1 from '../../img/new-meals2.jpg'
 function PopularCourses() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };
  return (
      <section id="Home1-courses">
          <div className="content">
          <h4>Most Popular Courses</h4>
            <div className="courses">
            <Carousel className="card-corusel" responsive={responsive}>
                <div><Card title="Franch for beginner to Andvencet Training" count="$99.00" name="Keny White" img1={img1} personNumber="98" personList="10"/></div>
                <div> <Card title="Intraduction to Mobile App Devlopment" count="Free" name="Sarah Jhonson" img1={img1} personNumber="150" personList="2"/></div>
                <div><Card title="How to Become a Startap Founder" count="$99.00" name="Jhon Milton" img1={img1} personNumber="200" personList="3"/></div>
                <div><Card title="Your Complite Guite to Self Development" count="$99.00" name="Pater Patker" img1={img1} personNumber="48" personList="5"/></div>
                <div> <Card title="Intraduction to Mobile App Devlopment" count="Free" name="Abdulloh Abdulhay" img1={img1} personNumber="100" personList="10"/></div>
                <div><Card title="How to Become a Startap Founder" count="$99.00" name="Jhon Milton" img1={img1} personNumber="98" personList="10"/></div>
                <div><Card title="Your Complite Guite to Self Development" count="$99.00" name="Pater Patker" img1={img1} personNumber="300" personList="30"/></div>
          </Carousel>
            </div>
          </div>
      </section>
  )
}
export default PopularCourses
