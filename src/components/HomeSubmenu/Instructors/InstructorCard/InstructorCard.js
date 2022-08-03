import React from 'react';
import { Link } from 'react-router-dom';
import './InstructorCard.css'
export default function InstructorCard(props) {
    const {manName,job} = props
  return (
        <div className='card instractors_items-card'>
            <div className="card-image waves-effect waves-block waves-light">
             <img className="activator" src=""/>
                    <div className='image-from-networks'>
                        <div className='upsocial-network'>
                            <a><i className='fab fa-facebook'></i></a>
                            <a><i className='fab fa-twitter'></i></a>
                            <a><i className='fab fa-google'></i></a>
                        </div>
                </div>
            </div>
            <div className="card-content">
                <Link to="sigle-instructor"><h6>{manName}</h6></Link>
                <Link to="sigle-instructor"> <span>{job}</span></Link>
                <p>
                    Fundamental parts of medi cal research include cellular and mol lecular biology.
                    medical genetics immunology
                </p>
            </div>
         </div>
  )
}
