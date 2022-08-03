import React from 'react';
import './Title.css'
export default function Title(props) {
    const {title} = props
  return (
      <section id='Title'>
          <div className='content'>
                <h4>{title}</h4>
          </div>
      </section>
  )
}
