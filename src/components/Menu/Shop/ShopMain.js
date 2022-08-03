import React from 'react';
import ShopCard from '../ShopCard/ShopCard';

export default function ShopMain() {
  return(
      <section id='shop-main'>
        <div className='events-linkes'>
             <span>Home</span><i className='fas fa-chevron-right'></i><span>Shop</span>
         </div>
          <div className='content'>
            <div className='shop-main_item'>
                <div className='shop-main_item-left'>
                    <div className='shop-main_item-left-sorting'>
                        <span>Showing 1-9 of result</span>
                        <a>Default Sorting<i className='fas fa-chevron-down'></i></a>
                    </div>
                    <div className='shop-main_item-left_shopcard'>
                        <ShopCard product="Wirebound Notebook" price="$45.00" adding="ADD TO CART"/>
                        <ShopCard product="Compact Stabler - Blue" price="$99.00" adding="ADD TO CART"/>
                        <ShopCard product="Wooden Pencel Yellow" price="$84.00" adding="ADD TO CART"/>

                        <ShopCard product="Excercise Book Sets" price="$65.00" adding="ADD TO CART"/>
                        <ShopCard product="Paper scissors" price="$40.00" adding="ADD TO CART"/>
                        <ShopCard product="Pencel Sharpen -3 in one" price="$55.00" adding="ADD TO CART"/>

                        <ShopCard product="Weribond Notebook Set" price="$10.00" adding="ADD TO CART"/>
                        <ShopCard product="Boll Point Pen" price="$80.00" adding="ADD TO CART"/>
                        <ShopCard product="Cashbound FIle Book" price="$66.00" adding="ADD TO CART"/>
                    </div>
                    <div className='next-page'>
                        <div className='next-page_step'>
                            <a>1</a>
                            <a>2</a>
                            <a><i className='fas fa-chevron-right'></i></a>
                        </div>
                    </div>
                </div>
                <div className='shop-main_item-right'>
                    <div className='courses-list_category shop-list_category'>
                                <div className='courses-search'>
                                    <input type="search" placeholder='Search Here...'/>
                                    <i className='fas fa-search'></i>
                                </div>
                                <h4>COURSE CATEGORYS</h4>
                                <div className='courses-name_list'>
                                    <a>Notebook</a>
                                    <a>Office</a>
                                    <a>Basics</a>
                                    <a>Art Supplies</a>
                                    <a>Materils</a>
                                </div>
                                <h4>PRICING FILTER</h4>
                                
                                <h4>POPULAR PRODUCTS</h4>
                                <div className='popular-courses2'>
                                    <div className='popular-courses_elem  popular-product_elem'>
                                        <img/>
                                        <div className='popular-products'>
                                            <h6>Wirebound Notebook</h6>
                                            <a>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </a>
                                            <span>$18.00</span>
                                        </div>
                                    </div>
                                    <div className='popular-courses_elem popular-product_elem'>
                                        <img/>
                                        <div className='popular-products'>
                                            <h6>Compact Stabler  - Blue</h6>
                                            <a>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </a>
                                            <span>$24.00</span>
                                        </div>
                                    </div>
                                    <div className='popular-courses_elem popular-product_elem'>
                                        <img/>
                                        <div className='popular-products'>
                                            <h6>Excircise Book Sets</h6>
                                            <a>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </a>
                                            <span>$33.00</span>
                                        </div>
                                    </div>
                                    <h4>TAGS</h4>
                                    <div className='single-course-tags'>
                                        <a>Future</a>
                                        <a>Sciense</a>
                                        <a>Coding</a>
                                        <a>Education</a>
                                        <a>Technology</a>
                                    </div>              
                                </div>
                        </div>
                </div>
            </div>
          </div>
      </section>
  )
}
