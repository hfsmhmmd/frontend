import React from 'react'

function cardProducts({title, author, publishYear}) {
  console.log('book', title , author , publishYear )
  // console.log('book', author)
  // console.log('book', publishYear)
  return (
    <div className=" carousel-item card p-2 card-compact w-36 shadow-lg  bg-base-100 ">
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full rounded-xl p-1 " alt="Tailwind CSS Carousel component" />
      <div className="space-y-1.4 mt-2 pl-1  flex flex-col items-start">
      {/* <h2 className="text-sm">
        {author}
        </h2> */}
        <h2 className="card-title text-lg capitalize ">
        {title}
        </h2>
          <h2 className="text-sm text-gray-400">
        Rp. 400.000
        </h2>
      {/* <div className="badge badge-secondary">$22</div> */}
      {/* <div className="card-actions justify-center">
        <button className="btn btn-primary">Buy Now</button>
      </div> */}
    </div>
  </div>
  )
}

export default cardProducts