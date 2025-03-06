import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async() => {
    
    try{
      const res = await axios.post(BASE_URL + "auth/signup", {
        name,
        email,
        password
      }, 
      {withCredentials: true})
      console.log(res.data)
      navigate('/home')
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className='flex justify-center mt-25'>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Sign Up</legend>
        
        <label className="fieldset-label">First Name</label>
        <input 
        type="text" 
        className="input" 
        placeholder="first name"
        value={name}
        onChange={(e) => setName(e.target.value)} />

        <label className="fieldset-label">Email</label>
        <input type="email"
         className="input" 
         placeholder="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)} />
        
        <label className="fieldset-label">Password</label>
        <input type="password"
         className="input" 
         placeholder="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)} />
        
        <button 
        className="btn btn-neutral mt-4"
        onClick={handleSubmit}
        >Sign Up</button>
        <div>
        <Link to='/login'>Already have an account? Login</Link>
        </div>
      </fieldset> 
    </div>
  )
}

export default Signup
