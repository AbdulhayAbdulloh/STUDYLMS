import React from 'react';

export default function LearnToday() {
  return (
      <section id="learn-today">
            <div className='content'>
                <div className='learn-today_item'>
                    <div className='today-item_search'>
                        <h4>Learn more the best.anywhere.</h4>
                        <span>Creative and business skills you can use today</span>
                        <div className='item-search'>
                            <input type="search" placeholder='What do you want to learn today?'/>
                            <a><i className='fa fa-search'></i></a>
                        </div>
                        <div className='all-items'>
                                <a><i className='fas fa-mobile'></i>More the 320 Instructors</a>
                                <a><i className='fas fa-book'></i>25000+ online courses</a>
                                <a><i className='fas fa-desktop'></i>Learn anything online</a>
                        </div>
                    </div>
                </div>
            </div>
      </section>
  )
}
