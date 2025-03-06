import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'

const Homepage = () => {

  const [folders, setFolders] = useState([])
  const [input, setInput] =useState("")

  const handleSubmit = async() => {
    try{
      const res = await axios.post(BASE_URL + "folder/add", {
        name : input,
      }, {withCredentials: true})
      await getFolders()
    } catch (err){
      console.log(err)
    }
  }

  const getFolders = async() => {
    try{
      const res = await axios.get(BASE_URL + "folder/get", {withCredentials: true})
      setFolders(res.data)
      console.log(res.data)
    } catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    getFolders()
  }, [])

  const handleDelete = async(folderId) => {
    try{
      await axios.delete(BASE_URL + "folder/delete", {
        data: { id: folderId },
        withCredentials: true
      })
      await getFolders()
    } catch (err){
      console.log(err)
    }
  }

  return (
    <div className='flex'>
      <div className="left w-[50vw] h-auto flex items-center my-5 flex-col">
      <div className='bg-white h-12 w-[40vw] rounded text-black flex justify-between'>
        <input type="text" 
        placeholder='add folder' 
        className='w-[80%] h-[100%] pl-3' 
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
        <button className="btn btn-secondary h-[100%]" onClick={handleSubmit}>Submit</button>
      </div>
      <div className='list flex flex-col mt-5 gap-5'>
        {folders.map((folder) => (
          <div 
          className='bg-white h-12 w-[40vw] rounded text-black text-2xl p-2 btn flex justify-between px-3'
          key={folder.id}>
            <button>{folder.name}</button>
            <button className='btn'
            onClick={() => handleDelete(folder.id)}>❌</button>
          </div> 
        ))}
      </div>
      </div>
      <div className="right w-[50vw] bg-white h-[100vh] flex justify-center pt-40">
      <div className="card card-border bg-base-100 w-96 h-[30vh]">
        <div className="card-body">
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Choose Folder</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
          <input type="file" className="file-input file-input-secondary" />
          <div className="card-actions justify-center ">
            <button className="btn btn-secondary">Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage
