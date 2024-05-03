import React from 'react'
// import Carousel from '../organism/Carousel'
import Carousel from '../organism/carousel'
import SectionHeader from '../organism/sectionHeader'
import HeaderPage from '../organism/headerPage'
import SectionSearch from '../organism/sectionSearch'



function Landing()  {
  return (

   <div className='flex flex-col items-evenly w-full pt-5 space-y-6  '>
    <section>
    <HeaderPage/>
    </section>
    <section>
    <SectionSearch/>
    </section>
    <section>
    <SectionHeader/>
   <Carousel/>
    </section>
    <section>
    <SectionHeader/>
   <Carousel/>
    </section>
   </div> 
  )
}

export default Landing