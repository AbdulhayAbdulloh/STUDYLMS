import React from 'react';
import Counter from '../Home1/Counter';
import UpcomingEvents from '../Home1/UpcomingEvents';
import HeppyStudent from './HeppyStudent';
import Home3AllChances from './Home3AllChances';
import Home3Insrtuctor from './Home3Insrtuctor';
import Home3Main from './Home3Main';
import Homme3NewStudent from './Home3NewStudent';
import PopularCourses2 from './PopularCourses2';
import PricingDetails from './PricingDetails';
import SearchCourse2 from './SearchCourse2';
import TrustedPartner from './TrustedPartner';

function Home3() {
  return (
      <div>
         
          <Home3Main/>
          <SearchCourse2/>
          <Home3AllChances/>
          <PopularCourses2/>
          <Home3Insrtuctor/>
          <UpcomingEvents/>
          <Homme3NewStudent/>
          <HeppyStudent/>
          <Counter/>
          <PricingDetails/>
          <TrustedPartner/>
      </div>
  )
}
export default Home3
