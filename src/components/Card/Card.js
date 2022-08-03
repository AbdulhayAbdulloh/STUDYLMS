import React from 'react';
import './Card.css'
 function Card(props) {
     const {title,count,name,img1,personList,personNumber} = props
  return (
    <div className="card" style={{width:'260px'}}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src=""/>
      </div>
      <div className="card-content">
          <a className="count">{count}</a>
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
export default Card
