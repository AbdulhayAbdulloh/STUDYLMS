import React,{useState} from 'react';

export default function SingleCourseMain() {
    const [showState,setState]= useState(true)
  return (
      <section id='single-course-name'>
          <div className='courses-linkes'>
                <span>Home</span>
                <i className='fas fa-chevron-right'></i>
                <span>Course</span>
                <i className='fas fa-chevron-right'></i>
                <span>Swift Programming for Beginners </span>
          </div>
          <div className='content'>
                <div className='course-name_item'>
                    <div className='course-name_item-left'>
                        <h5>Swift Programming for Beginners</h5>
                        <div className='name_item-left_elem'>
                            <div className='course-details'>
                                <div className='course-details_instructor'>
                                    <img/>
                                    <h6>Instructor<span>LOSPHER COOKE</span></h6>
                                </div>
                                <div className='course-details_category'>
                                    <i className='fas fa-book'></i>
                                    <h6>Categery<span>PROGRAMING LANGUAGE</span></h6>
                                </div>
                            </div>
                            <div className='result-stars'>
                                <a>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                </a>
                                <span>(2 Reviews)</span>
                            </div>
                        </div>
                        <div className='course-image1'>
                            <img/>
                        </div>
                        <div className='courses-description'>
                            <h6 className='Description'>Course Description</h6>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate 
                                strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of 
                                disruptive innovation via workplace diversity and empowerment.
                            </p>
                            <p>Encyclopaedia galactica Orion's sword explorations vanquish the impossible,
                                astonishment radio telescope with pretty stories for which there's little good evidence
                                light years muse about, great turbulent clouds billions upon billions the sky calls to us 
                                realm of the galaxies laws of physics globular star cluster. Quasar the only home we've ever
                                known extraordi claims require extraordinary evidence billions upon billions Drake Equation.
                            </p>
                        </div>
                        <h6 className='Description'>What you will learn</h6>
                        <ul>
                            <li><a>Thomas Edison may have been behind the invention.</a></li>
                            <li><a>Edison worked alongside partners, both financial and commercial, to get his best inventions off the ground,</a></li>
                            <li><a>Battling challenging cost targets and the need to build.</a></li>
                        </ul>
                        <p className='pn'>Quasar the only home we've ever known extraordinary claims require 
                            extraordinary evidence billions billions Drake Eqa tion. Stirred by starlight! 
                            At the edge of forever. Rich in mystery Sea of Tranquility. Are creatures of the
                             cosmos descend from astronomers. Trillion and billions upon billions upon billions
                              upon billions upon billions.upon billions upon billions!
                        </p>
                        <h6 className='Description'>Carriculam</h6>
                        <div className='section1-intraduction'>
                            <h5>SECTION1:INTRADUCTION</h5>
                            <div className='intraduction-table'>
                                <div className='intraduction-table-row1'>
                                    <div className='welcome-to'>
                                        <a><i className='fas fa-chevron-right'></i></a>
                                        <a><i className='fas fa-play'></i></a>
                                        <a>Welcome to the course</a>
                                        <a>VIDEO</a>
                                    </div>
                                    <div className='table-row1-right'>
                                        <a>PREVIEW</a>
                                        <span>17 Min</span>
                                    </div>
                                </div>
                                <div className='intraduction-table-row1'>
                                    <div className='welcome-to'>
                                        <a><i className='fas fa-chevron-right'></i></a>
                                        <a><i className='fas fa-list'></i></a>
                                        <a>Add and manage users</a>
                                        <a className='charge-free'>FREE</a>
                                    </div>
                                    <div className='table-row1-right'>
                                        <span>25 Min</span>
                                    </div>
                                </div>
                                <div className='intraduction-table-row1-elem'>
                                    <div className='intraduction-table-row1 table-row02'>
                                        <div className='welcome-to'>
                                            <a onClick={()=>setState(!showState)}><i className='fas fa-chevron-right'></i></a>
                                            <a className='new-icons'><i className='fas fa-magic'></i></a>
                                            <a>Magic wand vs quick selection</a>
                                            <a>QUIZ</a>
                                        </div>
                                        <div className='table-row1-right'>
                                            <span>37 MIN</span>
                                        </div>
                                    </div>
                                    {!showState ? <p>Capitalize on low hanging fruit to identify a ballpark 
                                        value added activity beta test Override the digital divide with additional
                                        lickthroughs from DevOps. Nanotechnology immersion along the information highway
                                         will close the loop on focusing solely on the bottom line.
                                        </p>
                                        : null
                                    }
                                </div>
                                <div className='intraduction-table-row1'>
                                    <div className='welcome-to'>
                                        <a><i className='fas fa-chevron-right'></i></a>
                                        <a><i className='fas fa-play'></i></a>
                                        <a>How to use LearnPress</a>
                                        <a>VIDEO</a>
                                    </div>
                                    <div className='table-row1-right'>
                                        <a>PREVIEW</a>
                                        <span>22 MIN</span>
                                    </div>
                                </div>
                                <div className='intraduction-table-row1 table-row03'>
                                    <div className='welcome-to'>
                                        <a><i className='fas fa-chevron-right'></i></a>
                                        <a><i className='fas fa-list'></i></a>
                                        <a>Add and manage users</a>
                                        <a id='seminare'>SEMINARE</a>
                                    </div>
                                    <div className='table-row1-right'>
                                        <span>48 MIN</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='section1-intraduction section2-basic'>
                            <h5>SECTION2:BASIC TOOLS MANAGMENT</h5>
                            <div className='intraduction-table'>
                            <div className='intraduction-table-row1 table-row03'>
                                    <div className='welcome-to'>
                                        <a><i className='fas fa-chevron-right'></i></a>
                                        <a><i className='fas fa-list'></i></a>
                                        <a>Welcome to the courses</a>
                                        <a id='seminare'>SEMINARE</a>
                                    </div>
                                    <div className='table-row1-right'>
                                        <span>48 MIN</span>
                                    </div>
                                </div>

                            <div className='intraduction-table-row1 table2-row'>
                                    <div className='welcome-to'>
                                        <a><i className='fas fa-chevron-right'></i></a>
                                        <a><i className='fas fa-list'></i></a>
                                        <a>Add and manage users</a>
                                        <a className='charge-free'>FREE</a>
                                    </div>
                                    <div className='table-row1-right'>
                                        <span>25 Min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='courses-social-network'>
                            <div className='courses-social-network-elem'>
                                <a><i className='fab fa-facebook'></i></a>
                                <a><i className='fab fa-twitter'></i></a>
                                <a><i className='fab fa-google'></i></a>
                                <a><i className='fas fa-plus'></i></a>
                            </div>
                            <a>Bookmark this course</a>
                        </div>

                        <div className='About-instructors'>
                            <h4>About Instructors</h4>
                             <div className='About-instructors_items'>
                                    <div className='person-deatils'>
                                        <img/>
                                        <div className='person-deatils_inform'>
                                            <h5>Marry Jhonson</h5>
                                            <span>Back-and Developer</span>
                                            <p>Encyclopaedia galactica Orion's sword explorations vanquish the impossible, astonishment radio 
                                                telescope with pretty stories for which there's little good.
                                            .</p>
                                            <a>VIEW PROFILE</a>
                                        </div>
                                    </div>
                             </div>
                        </div>

                        <div className='courses-review'>
                                <h4>Reviews</h4>
                                <h5>There are 2 reviews on this course</h5>
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
                    </div>
                    <div className='course-name_item-right'>
                        <div className='take-this-course'>
                             <a className='take'>TAKE THIS COURSE</a>
                             <span>PRICE:<span>$39.00</span></span>
                             <div className='course-table-come'>
                                    <a><i className='fas fa-user'></i>199 Students</a>
                                    <a><i className='fas fa-clock'></i>Duration: 30 days</a>
                                    <a><i className='fas fa-microphone'></i>Lectures:10</a>
                                    <a><i className='fas fa-play'></i>Video 12 hours</a>
                                    <a><i className='fas fa-book'></i>Certification of Complation</a>
                             </div>
                        </div>
                        <div className='courses-list_category single-list-caategory'>
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
                    <h4>COURSE INTRO</h4>
                    <div className='courses-video'>
                        <video/>
                        <i className='fas fa-play'></i>
                    </div>
                    <h4>POPULAR COURSES</h4>
                    <div className='popular-courses2'>
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
      </section>
  )
}
