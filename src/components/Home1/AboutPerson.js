import React from 'react';
import Slider from 'react-perfect-slider'
import './Home1.css'
export default function AboutPerson() {
  return (
      <section id="about-person">
          <div className="content">
            <div className='about-person_inform'>
            <Slider renderControls={(next, previous) => [
                            <button className='chevron-left' onClick={previous}><i className='fas fa-chevron-left'></i></button>,
                            <button className='chevron-right' onClick={next}><i className='fas fa-chevron-right'></i></button>
                        ]}>
                    <div className='person_inform-detals'>
                        <h4>What People Say</h4>
                        <p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger<br/> where he hasn't got a damper.
                            As stands out like brass razoo heaps it'll <br/>relo. As busy as a paddock.”</p>
                            <img className='person_image'/><br/>
                            <span>Nehtor Doct</span><span> - Developer</span>
                   </div>
                   <div className='person_inform-detals'>
                        <h4>What People Say</h4>
                        <p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger<br/> where he hasn't got a damper.
                            As stands out like brass razoo heaps it'll <br/>relo. As busy as a paddock.”</p>
                            <img className='person_image'/><br/>
                            <span>Nehtor Doct</span><span> - Developer</span>
                   </div>
                   <div className='person_inform-detals'>
                        <h4>What People Say</h4>
                        <p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger<br/> where he hasn't got a damper.
                            As stands out like brass razoo heaps it'll <br/>relo. As busy as a paddock.”</p>
                            <img className='person_image'/><br/>
                            <span>Nehtor Doct</span><span> - Developer</span>
                   </div>
                        </Slider>
            </div>
          </div>
      </section>
  )
}
