import React, { useState, useEffect } from 'react';
// import cardProducts from '../molecules/cardProducts'
import CardProducts from '../molecules/cardProducts'


function Carousel() {

  const [books, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5555/books');
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  // console.log(books)
  
  // const {data} = books ; 
  return (
    <div className="carousel carousel-center max-w-lg lg:max-w-lg   pb-6 space-x-4  rounded-box">
    
  { books ? books.map((item)=>  <CardProducts 
      title={item.title}
      author={item.author}
      publishYear={item.publishYear}
    /> ) : null}
     
   
    {/* <CardProducts/>
    <CardProducts/> */}
    
    </div>
  )
}

export default Carousel