import React from 'react'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  return (
      <div>
      <div className="navbar bg-secondary shadow-sm">
        <div className="navbar-start">
          
          <Link to="/home" className="btn btn-ghost text-xl">Cloud Storage</Link>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn bg-base-100 mr-5">Logout</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar
