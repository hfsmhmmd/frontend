import React from 'react'
import { Link } from 'react-router-dom'

function backButton({ destination ='/'}) {
  return (
   <Link to={`${destination}`}/>
  )
}

export default backButton