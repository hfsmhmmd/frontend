import React,{ useEffect, useState} from 'react'
import { AiTwotoneDelete , AiTwotoneEdit,  AiTwotoneEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
function tableBook() {
    const [buku, setBuku] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const reseponse = await (fetch('http://localhost:5555/books'));
          const data = await reseponse.json();
          // setData(data.data)
          // console.log(data.data)
          setBuku(data.data)
          setIsLoading(false)
        } catch(error){
          console.log(error)
          setIsLoading(false)
        }
      };
      fetchData();
    }, [])
  
    if(buku){
      console.log(buku)
    }
    return (

<div className="overflow-x-auto px-3">
  <table className="table">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th> # </th>
        <th>title</th>
        <th>Author</th>
        <th>Year of Published</th>
        <th> Actions </th>
      </tr>
    </thead>
  
    <tbody>
  {buku ?  buku.map((item, index)=> 

      <tr key={index}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"><p className='text-biru capitalize'>{item.title}</p></div>
              
            </div>
          </div>
        </td>
        <td>
       { item.author}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>
        { item.publishYear}
          </td>
        <th>
        <div className='space-x-2'>
            <Link to={`/dashboard/ViewBook/:${item._id}`}>
                <button className="btn btn-md ">
                <AiTwotoneEye />
                </button>
            </Link>

            <Link to={`/dashboard/UpdateBook/:${item._id}`}>
              <button className="btn btn-md">
                <AiTwotoneEdit />
              </button>
            </Link>

            <Link to={`/dashboard/DeleteBook/:${item._id}`}>
          <button className="btn btn-md">   
          <AiTwotoneDelete />
          </button>
            </Link>
              
        </div>
        </th>
      </tr>
    ): null }
    </tbody>
   </table>
    <tfoot>

    </tfoot>
 
    </div>
    

  )
}

export default tableBook