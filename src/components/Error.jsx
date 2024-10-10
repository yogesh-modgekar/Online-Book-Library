import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='notFound'>
    <h1>Page Not Found</h1>
    <Link to='/'>Please go to Home Page...</Link>
    </div>
  )
}

export default Error