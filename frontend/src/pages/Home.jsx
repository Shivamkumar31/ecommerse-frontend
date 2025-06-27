import React from 'react'

import BestSeller from '../components/BestSeller'; // Adjust path as needed


import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
     <Hero/>
<LatestCollection/>

<BestSeller/>
<OurPolicy/>
<NewsletterBox/>
<Footer/>
    </div>
  )
}

export default Home
