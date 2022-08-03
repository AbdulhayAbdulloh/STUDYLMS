import React from 'react';
import './Home2.css'
export default function Home2RecentNews() {
  return (
      <section id='home2-news'>
        <div className='content'>
        <div className='work-title home2-news_title'>
                    <h4>Recent News</h4>
                    <p>Share your work to collaboratve with our vibrant design element.</p>
                    <span></span>
        </div>
            <div className='home2-news_item'>
                <div className='news-item1'>
                    <img className='news-items_image'/>
                    <div className='news-items_inform'> 
                         <h5>Best Educational Psd Template Launching Today</h5> 
                         <p>Areas tackled in the most fundamental parts of medical research include cellu lar and molecular biology...</p>
                         <span>MARCH 05,2017 BY ANDREW CASET</span>  
                    </div>
                </div>
                <div className='news-item1'>
                    <img className='news-items_image'/>
                       <div className='news-items_inform'>
                             <h5>10 New Online Courses for Creative Students</h5> 
                            <p>Areas tackled in the most fundamental parts of medical research include cellu lar and molecular biology...</p>
                            <span>MARCH 05,2017 BY ANDREW CASET</span>
                       </div>
                </div>
            </div>
        </div>
      </section>
  )
}
