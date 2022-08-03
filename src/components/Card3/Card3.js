import React from 'react';
import { Link } from 'react-router-dom';
import './Card3.css'
 function Card3(props) {
     const {title,count,name,img1,personList,personNumber} = props
  return (
    <div className="card" style={{width:'268px'}}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src=""/>
      </div>
      <div className="card-content">
          <Link to='singlecourse' className="count">{count}</Link>
          <p>{title}</p>
          <div className="cord-content_person">
              <img width={'20px'} height={'20px'} src={img1}/>
              <span>{name}</span>
          </div>
      </div>
      <div className="card-footer">
        <div className="numbers-person">
          <a><i className="fas fa-book"></i>{personNumber}</a>
          <a><i className="fas fa-list"></i>{personList}</a>
        </div>
          <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fa fa-star"></i>
          </div>
      </div>
  </div>
  )
}
export default Card3
