import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'

function ViewBook() {
  const [buku, setBuku] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reseponse = await (fetch(`http://localhost:5555/books/${id}`));
        const data = await reseponse.json();
        // setData(data.data)
        // console.log(data.data)
        setBuku(data)
        setIsLoading(false)
      } catch(error){
        console.log(error)
        setIsLoading(false)
      }
    };
    fetchData();
  }, [])

  // if(buku){
  //   console.log(buku)
  // }
  console.log(buku)
  const {id} = useParams()
  console.log(id)

  return (
    <div className="w-full flex flex-row justify-center align-center">
      <div className='w-11/12 pt-4'>

    

       {buku ? 
       (
   <div className="card card-side bg-base-100  shadow-xl w-2/5">
  
  <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
   
    <h2 className="card-title capitalize">{buku.title}</h2>
    <p>{buku.author}</p>
    <p>{buku.publishYear}</p>
    <p>{new Date(buku.createdAt).toString()}</p>
    <p>{new Date(buku.updatedAt).toString()}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
 
</div>

 )
: null}
  </div>
  </div>
  )
}

export default ViewBook