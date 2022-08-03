import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const forumn=[
    {
        forumnTitle:"Android Mobile App",
        forumnInfo:'A Flannel subway tile fam tilde brunch, cliche franzen hell of Cronut pitchfork quinoa s wind energy continues.',
        topics:4,
        posts:5,
        freshness:'10 days ago',
        personName:'Maddin Smith'
    },
    {
        forumnTitle:"Cloud Computing",
        forumnInfo:'Squid post-ironic gastropub ugh fashion axe, celiac brooklyn salvia distillery authentic yuccie affogato. ',
        topics:2,
        posts:12,
        freshness:'1 months ago',
        personName:'Diana Cook'
    },
    {
        forumnTitle:"Web Development",
        forumnInfo:'Unicorn humblebrag woke gochujang, succulents fashion axe hell of fixie sriracha thundercats hexagon.',
        topics:1,
        posts:1,
        freshness:'2 months ago',
        personName:'A Abdulhay'
    },
    {
        forumnTitle:"Technology",
        forumnInfo:'Artisan gluten-free echo park, cray art party af literally subway tile quinoa tumeric venmo bicycle rights.',
        topics:0,
        posts:0,
        freshness:'No Topics',
        personName:null
    },
    {
        forumnTitle:"Technology",
        forumnInfo:'Keytar tacos bushwick, hexagon sartorial polaroid marfa biodi master cleanse blog swag iceland chambray poke.',
        topics:1,
        posts:15,
        freshness:'6 months ago',
        personName:'Diana Cook'
    },
    {
        forumnTitle:"Oparating System",
        forumnInfo:'Cardigan small batch plaid artisan, blue bottle shabby chic try-hard. ',
        topics:0,
        posts:0,
        freshness:'No Topics',
        personName:null
    },
    {
        forumnTitle:"Photoshop",
        forumnInfo:'Mlkshk beard pug cold-pressed sartorial pour-over cred unicorn bushwick. ',
        topics:4, 
        posts:10,
        freshness:'7 months ago',
        personName:'Diane Cook'
    },
    {
        forumnTitle:"Mobile Computing",
        forumnInfo:'Tote bag mumblecore tumblr church-key austin kickstarter the, edison bulb viral leggings.',
        topics:4, 
        posts:10,
        freshness:'7 months ago',
        personName:'Student'
    },
    {
        forumnTitle:"Software Testing",
        forumnInfo:'A Flannel subway tile fam tilde brunch, cliche franzen hell of. Cronut pitchfork quinoa s wind energy continues.',
        topics:0, 
        posts:0,
        freshness:'No Topics',
        personName:null
    },
]

export default function ForumnMain() {
    const [forumnData,setForumnData] = useState(forumn)
  return (
      <section id='forumn-main'>
           <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Forum</span>    
          </div>
          <div className='content'>
             <div className='forumn-main_item'>
                 <div className='forumn-main_item-left'>
                     <div className='forumn-main_item-left-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>FORUMN</th>
                                    <th>TOPICS</th>
                                    <th>POSTS</th>
                                    <th>FRESHNESS</th>
                                </tr>
                            </thead>
                            {
                                forumnData.map((elem,index)=>{
                                    return(
                                        <tbody>
                                                <tr className={(index%2===0) ? "forumn-table-tr1" :"forumn-table-tr2"}>
                                                    <td>
                                                        <Link to='single-forumn'>{elem.forumnTitle}</Link><br/>
                                                        <p>{elem.forumnInfo}</p>
                                                    </td>
                                                    <td>{elem.topics}</td>
                                                    <td>{elem.posts}</td>
                                                    <td>{elem.freshness}<br/><span>{elem.personName}</span></td>
                                                </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                     </div>
                 </div>
                 <div className='forumn-main_item-right'>
                  <div className='courses-list_category forumn-main-category'>
                                <div className='courses-search courses-search3'>
                                    <input type="search" placeholder='Search...'/>
                                    <i className='fas fa-search'></i>
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
                                <h4>COURSE CATEGORYS</h4>
                                <div className='courses-name_list'>
                                    <a>Businnes</a>
                                    <a>Design</a>
                                    <a>Programing Language</a>
                                    <a>Photography</a>
                                    <a>Language</a>
                                    <a>Live Style</a>
                                    <a>IT & Software</a>
                                </div>
                                {/* <h4>COURSE INTRO</h4>
                                <div className='courses-video'>
                                    <video/>
                                    <i className='fas fa-play'></i>
                                </div> */}
                                <h4>POPULAR COURSES</h4>
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
