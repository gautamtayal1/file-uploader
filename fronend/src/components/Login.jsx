import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("g1")
  const [password, setPassword] = useState("g1")

  const handleSubmit = async() => {
    try{
      const res = await axios.post(BASE_URL + "auth/login", {
        email,
        password
      }, 
      {withCredentials: true})
      navigate('/home')
      console.log(res);
      
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='flex justify-center mt-30 '>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Login</legend>
        
        <label className="fieldset-label">Email</label>
        <input 
        type="email" 
        className="input" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        
        <label className="fieldset-label">Password</label>
        <input 
        type="password" 
        className="input" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        
        <button 
        className="btn btn-neutral mt-4"
        onClick={handleSubmit}>Login</button>
        <div>
        <Link to='/signup'>Don't have an account? Sign Up</Link>
        </div>
      </fieldset>
    </div>
  )
}

export default Login
