import React from 'react';
import ShopCard from '../ShopCard/ShopCard';

export default function SingleShopMain() {
  return (
      <section id='single-shop-main'>
          <div className='events-linkes'>
             <span>Home</span><i className='fas fa-chevron-right'></i><span>Shop</span>
             <i className='fas fa-chevron-right'></i><span>Yellow Drawing Pencil Set</span>
         </div>
          <div className='content'>
             <div className='single-shop-main_item'>
                 <div className='single-shop-main_item-left'>
                    <div className='single-shop-main_item-left_elem'>
                        <img/>
                        <div className='single-shop-main_product'>
                            <h4>Yellow Drawing Pancil Set</h4>
                            <a>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </a>
                            <span>(5 Cstomers reviews)</span>
                            <h6>$18.00</h6>
                            <p>Air plant keffiyeh tilde umami PBR&B taxidermy yr next level. Glossier authentic normcore, keytar tumblr green 
                                juice VHS copper mug chartreuse portland banjo single origin coffee tattooed pabst. Raclette trust fund
                                 8-bit you probably haven't heard of them fap. 
                            </p>
                            <h3>In stock</h3>
                            <div className='single-shop-main_addcart'>
                                <input type='number' placeholder='1'/>
                                <a>ADD TO CARD</a>
                            </div>
                            <h5 className='h5-1chi'>Category:<span>Stationary,Notebook</span></h5>
                            <h5>Tags:<span>Pencil,Drawing</span></h5>
                        </div>
                    </div>
                    <div className='single-shop-description'>
                        <a>Description</a>
                        <a>Reviews(2)</a>
                    </div>
                        
                    <div className='courses-review single-shop-review'>
                                <h5>2 Review for Product</h5>
                                <div className='courses-review_item'>
                                    <img/>
                                    <div className='courses-review_details'>
                                        <div className='courses-review_person-inform'>
                                             <span>Lavin Duster - <span>March 7,2016</span></span>
                                             <a>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                             </a>
                                        </div>
                                        <p>Brunch fap cardigan, gentrify put a bird on it distillery mumblecore you probably
                                             haven't heard of them asymmetrical bushwick. Put a bird on it schlitz fashion.
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className='courses-review_item'>
                                    <img/>
                                    <div className='courses-review_details'>
                                        <div className='courses-review_person-inform'>
                                             <span>Tim Cook - <span>March 5,2016</span></span>
                                             <a>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                             </a>
                                        </div>
                                        <p>Flxie sartorial cray flexitarian pop-up health goth single-origin coffee sriracha.
                                            salvia art party mustache. Ennui edison bulb meditation, seitan lomo iPhone lyft cornhole. 
                                        </p>
                                    </div>
                                </div>
                        </div>
                        <div className='courses-add-reviews'>
                                <h4>Add a Reviews</h4>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <div className='courses-add-reviews_items'>
                                    <div className='add-reviews_email'>
                                        <span>Your Rating</span>
                                        <a>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                                 <i className='fas fa-star'></i>
                                        </a>
                                    </div>
                                    <div className='add-reviews_email'>
                                        <span>Your Review *</span>
                                        <input type="text"/>
                                    </div>
                                    <div className='add-reviews_email'>
                                        <span>Name *</span>
                                        <input type="text"/>
                                    </div>
                                    <div className='add-reviews_email'>
                                        <span>Email *</span>
                                        <input type="email"/>
                                    </div>
                                    <div className='add-reviews_email'>
                                        <a>SUBMIT</a>
                                    </div>
                                </div>
                        </div>
                        <div className='single-shop-related-product'>
                            <h4>Related Products</h4>
                            <div className='single-shop-related-product_item'>
                                 <ShopCard product="Wirebound Notebook Set" price="$10.00" adding="ADD TO CART"/>
                                 <ShopCard product="Boll Point Pen" price="$80.00" adding="ADD TO CART"/>
                                 <ShopCard product="Cashbound" price="$66.00" adding="ADD TO CART"/>
                            </div>
                        </div>
                 </div>
                 <div className='single-shop-main_item-right'>
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