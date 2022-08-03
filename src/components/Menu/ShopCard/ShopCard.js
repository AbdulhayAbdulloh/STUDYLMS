import React from 'react';
import { Link } from 'react-router-dom';
import './ShopCard.css'
export default function ShopCard(props) {
    const {product,price,adding} = props
  return(
      <div className='shop-card'>
         <div className='shop-card-item'>
             <div className='shop-card-item_image'>
                 <Link to='single-shop'>  <img/></Link>
             </div>
             <Link to='single-shop'>{product}</Link>
             <a>
                 <i className='fas fa-star'></i>
                 <i className='fas fa-star'></i>
                 <i className='fas fa-star'></i>
                 <i className='fas fa-star'></i>
                 <i className='fas fa-star'></i>
             </a>
             <Link to='single-shop'>{price}</Link>
             <a>{adding}</a>
         </div>
      </div>
  )
}
