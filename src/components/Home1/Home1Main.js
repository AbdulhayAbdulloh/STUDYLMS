import React from 'react';
import BackgroundSlider from 'react-background-slider';
import image1 from '../../img/third-bg2.jpg';
import image2 from '../../img/third-bg1.jpg';
import image3 from '../../img/new-meals3.jpg'
function Home1Main() {
  return (
    <section id="main-item">   
            <BackgroundSlider
            images={[image1, image2,image3]}
            duration={10} transition={2} />
        <div className="content">
            <div className="main-title">
                <div className="titles">
                    <h3>Education & Training<br/> Organization</h3>
                    <p>We offer the most complete course pakage in the country, for the<br/>
                        research, design and development of Education.
                    </p>
                    <button>OUR COURSES</button>
                    <button>CONTACS US</button>
                </div>
            </div>
        </div>
        <div className="main-bottom">
                <div className="main_bottom-item">
                    <i class="fas fa-phone"></i>
                    <h5>World's Best Instructors<a>WIEV MORE</a></h5>
                </div>
                <div className="main_bottom-item">
                    <i class="fas fa-laptop"></i>
                    <h5>World's Best Instructors<a>WIEV MORE</a></h5>
                </div>
                <div className="main_bottom-item">
                    <i class="fas fa-book"></i>
                    <h5>World's Best Instructors<a>WIEV MORE</a></h5>
                </div>
            </div>
    </section>
  )
}
export default  Home1Main