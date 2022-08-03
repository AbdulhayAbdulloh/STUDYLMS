import React from 'react';
import InstructorCard from './InstructorCard/InstructorCard';

export default function InstructorsMain() {
  return(
      <section id='instructors-main'>
          <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Contact</span>    
          </div>
          <div className='content'>
             <div className='instructors-main_item'>
                <InstructorCard manName="Steaven Maseri" job="Designer"/>
                <InstructorCard manName="Jackson James" job="Developer"/>
                <InstructorCard manName="Thorsten Tailor" job="Artist"/>
                <InstructorCard manName="Katrine Fonsmark" job="Leturature"/>

                <InstructorCard manName="Steaven Maseri" job="Designer"/>
                <InstructorCard manName="Jackson James" job="Developer"/>
                <InstructorCard manName="Thorsten Tailor" job="Artist"/>
                <InstructorCard manName="Katrine Fonsmark" job="Leturature"/>

             </div>
          </div>
      </section>
  )
}
