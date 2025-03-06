import React from 'react'
import { Link, useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';

const Navbar = () => {

  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "auth/logout", {}, { withCredentials: true });
      console.log("Logged out successfully");
      navigate('login')
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
      <div>
      <div className="navbar bg-secondary shadow-sm">
        <div className="navbar-start">
          
          <Link to="/home" className="btn btn-ghost text-xl">Cloud Storage</Link>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn bg-base-100 mr-5"
          onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar
