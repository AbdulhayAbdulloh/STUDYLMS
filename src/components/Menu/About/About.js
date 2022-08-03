import React from 'react';
import Counter from '../../Home1/Counter';
import NewStudent from '../../Home2/NewStudent';
import OurInstrctors from '../../Home2/OurInstrctors';
import HeppyStudent from '../../Home3/HeppyStudent';
import Homme3NewStudent from '../../Home3/Home3NewStudent';
import './About.css'
import AboutMain from './AboutMain';
import AboutTItle from './AboutTItle';
export default function About() {
  return (
      <div>
          <AboutTItle/>
          <AboutMain/>
          <Counter/>
          <HeppyStudent/>
         <NewStudent/>
         <OurInstrctors/>
      </div>
  )
}
