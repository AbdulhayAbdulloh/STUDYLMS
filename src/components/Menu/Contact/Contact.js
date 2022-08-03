import React from 'react';
import ContactTItle from './ContactTItle';
import './Contact.css'
import ContactMain from './ContactMain';
import ContactMap from './ContactMap';
import HeveQuestion from './HeveQuestion';
export default function Contact() {
  return(
      <div>
          <ContactTItle/>
          <ContactMain/>
          <ContactMap/>
          <HeveQuestion/>
      </div>
  )
}
