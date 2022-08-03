import React from 'react';
import Slider from 'react-perfect-slider'
export default function HeppyStudent() {
  return (
      <section id='happy-student'>
          <div className='content'>
             <div className='happy-student_items'>
                <div className='students-item_elem'>
                    <h4>Happy Stuudents Say </h4>
                        
                    <Slider renderControls={(next, previous) => [
                            <button className='chevron-left' onClick={previous}><i className='fas fa-chevron-left'></i></button>,
                            <button className='chevron-right' onClick={next}><i className='fas fa-chevron-right'></i></button>
                        ]}>
                    <div className='inform-of-student'>
                        <div className='slider-inform'>
                            <p>“The labour movement had the best opportunity in 50 years to transform 
                                not merely an industrial situation and win an impor tant battle for workers in struggle,
                                 but an opportunity to change the government of the day”.
                            </p>
                            <i className='fa fa-chevron-down'></i>
                        </div>
                        <div className='student-image'>
                            <img/>
                            <h6>Gregory Benford<span>Developer</span></h6>
                        </div>
                    </div>
                    <div className='inform-of-student'>
                        <div className='slider-inform'>
                            <p>“The labour movement had the best opportunity in 50 years to transform 
                                not merely an industrial situation and win an impor tant battle for workers in struggle,
                                 but an opportunity to change the government of the day”.
                            </p>
                            <i className='fa fa-chevron-down'></i>
                        </div>
                        <div className='student-image'>
                            <img/>
                            <h6>Gregory Benford<span>Developer</span></h6>
                        </div>
                    </div>
                        </Slider>

                </div>
                <div className='students-item_elem'>
                    <h4>Why Studylms Best?</h4>
                    <div className='inform-table'>
                        <h6>Learn anthing online<i className='fas fa-plus'></i></h6>
                        <h6>Basic to advence course<i className='fas fa-minus'></i></h6>
                        <p>Areas tackled the most fundamental parts of medical research include cellular way and 
                            molecular biology medical genetics immunology neu science and psychology
                        </p>
                        <h6>Free Video Tutorials<i className='fas fa-minus'></i></h6>
                    </div>
                </div>
             </div>
          </div>
      </section>
  )
}
