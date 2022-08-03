import React from 'react';
import BackgroundSlider from 'react-background-slider';
import image1 from '../../img/third-bg2.jpg';
import image2 from '../../img/third-bg1.jpg';
import image3 from '../../img/new-meals3.jpg'
import './Home3.css'
function Home3Main() {
  return (
    <section id="main-item">   
            <BackgroundSlider
            images={[image1, image2,image3]}
            duration={10} transition={2} />
        <div className="content">
            <div className="main-title">
                <div className="titles">
                    <h3>Learn New Skills You <br/>Can Use Today</h3>
                    <p>We offer the most complete course pakage in the country . </p>
                    <button>LEARN MORE</button>
                    <button>LEARN NEW SKILLS</button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default  Home3Main