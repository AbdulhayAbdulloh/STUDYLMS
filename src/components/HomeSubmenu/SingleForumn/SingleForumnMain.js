import React,{useState} from 'react';

const provite=[
    {
        topic:'Introduction to Application',
        topicStart:'start by:John Mery',
        voices:4,
        posts:10,
        freshness:'10 day ago',
        personName:'Middn Smith'
    },
    {
        topic:'Features',
        topicStart:'start by:Tin Cook',
        voices:4,
        posts:8,
        freshness:'1 month ago',
        personName:'Diane Cook'
    },
    {
        topic:'Usage',
        topicStart:'start by:Chrish John ',
        voices:2,
        posts:5,
        freshness:'2 month ago',
        personName:'Student'
    },
    {
        topic:'Andriod Versions',
        topicStart:'start by:Diane Cook ',
        voices:5,
        posts:10,
        freshness:'2 month ago',
        personName:'Birlin Jose'
    }
]
export default function SingleForumnMain() {
    const [proviteForum,setProviteForum] = useState(provite)
  return (
      <section id='single-forumn-main'>
           <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Forum</span>
            <i className='fas fa-chevron-right'></i><span>Provite Forum</span>    
          </div>
          <div className='content'>
             <div className='single-forumn-main_item'>
                 <div className='single-forumn-main_item-left'>
                    <div className='forumn-main_item-left-table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>TOPIC</th>
                                        <th>voices</th>
                                        <th>POSTS</th>
                                        <th>FRESHNESS</th>
                                    </tr>
                                </thead>
                                {
                                    provite.map((elem,index)=>{
                                        return(
                                            <tbody>
                                                    <tr className={(index%2===0) ? "forumn-table-tr1" :"forumn-table-tr2"}>
                                                        <td>
                                                            <a>{elem.topic}</a><br/>
                                                            <p>{elem.topicStart}</p>
                                                        </td>
                                                        <td>{elem.voices}</td>
                                                        <td>{elem.posts}</td>
                                                        <td>{elem.freshness}<br/><span>{elem.personName}</span></td>
                                                    </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div>
                        <div className='sigle-forumn-main-bottom'>
                            <p>Viewing 4 topics - 1 through 4(of 4 total) </p>
                            <a>You must be logged in to create new topics</a>
                        </div>
                 </div>
                 <div className='single-forumn-main_item-right'>
                     <div className='courses-list_category forumn-main-category'>
                                <div className='courses-search courses-search3'>
                                    <input type="search" placeholder='Search...'/>
                                    <i className='fas fa-search'></i>
                                </div>
                                <h4>CATEGORYIES</h4>
                                <div className='courses-name_list'>
                                    <a>Education</a>
                                    <a>Curses</a>
                                    <a>Blog</a>
                                    <a>Adminstration</a>
                                    <a>Materils</a>
                                    
                                </div>
                                <h4>LATEST POST</h4>
                                <div className='popular-courses2 popular-courses3'>
                                    <div className='popular-courses_elem'>
                                        <img/>
                                        <h6>11 Times Old Fortunate Galned New Life<span>MAR 05.2017</span></h6>
                                    </div>
                                    <div className='popular-courses_elem'>
                                        <img/>
                                        <h6>How to Decorate Width Modern Kitchen <span className='free'>MAR 05.2017</span></h6>
                                    </div>
                                    <div className='popular-courses_elem'>
                                        <img/>
                                        <h6>New Quality Modern House RenavotionTrend<span>MAR 05.2017</span></h6>
                                    </div>
                                 </div>
                
                                {/* <h4>COURSE INTRO</h4>
                                <div className='courses-video'>
                                    <video/>
                                    <i className='fas fa-play'></i>
                                </div> */}
                                {/* <h4>POPULAR COURSES</h4> */}
                                {/* <div className='popular-courses2'>
                                    <div className='popular-courses_elem'>
                                        <img/>
                                        <h6>Your Complete Guide to Photography<span>$99.00</span></h6>
                                    </div>
                                    <div className='popular-courses_elem'>
                                        <img/>
                                        <h6>Introduction to Mobile Apps Development<span className='free'>FREE</span></h6>
                                    </div>
                                    <div className='popular-courses_elem'>
                                        <img/>
                                        <h6>How to Become Startup Founder<span>$45.60</span></h6>
                                    </div>
                                 </div> */}
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
      </section>
  )
}
