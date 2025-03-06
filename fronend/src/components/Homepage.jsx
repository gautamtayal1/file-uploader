import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'

const Homepage = () => {

  const [folders, setFolders] = useState([])
  const [input, setInput] = useState("")
  const [file, setFile] = useState("")
  const [folderId, setFolderId] = useState(null)


  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }
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
  const handleFileSubmit = async (e) => {
    try{
      if (!file) {
        console.log("No file selected")
        return
      }
      const formData = new FormData()
      formData.append("file", file);
      formData.append("folderId", folderId);

      const res = await axios.post(BASE_URL + "file/add", formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        })
        console.log(res)
    } catch (err){
      console.log(err)
    }
  }

  return (
    <div className='flex'>
      <div className="left w-[50vw] h-auto flex items-center my-7 flex-col">
      <div className='bg-white h-12 w-[40vw] rounded text-black flex justify-between'>
        <input type="text" 
        placeholder='add folder' 
        className='w-[80%] h-[100%] pl-3' 
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
        <button className="btn btn-secondary h-[100%]" onClick={handleSubmit}>Submit</button>
      </div>
      <div className='list flex flex-col mt-7 gap-7'>
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
        <select defaultValue="Pick a color" 
        className="select"
        onChange={(e) => setFolderId(e.target.value)}>

          <option disabled={true}
          value={folderId}
          >Choose Folder</option>
          {folders.map((folder) => (
            <option value={folder.id} key={folder.id}>{folder.name}</option>
          ))}
        </select>
          <input type="file" 
          className="file-input file-input-secondary mt-3"
          onChange={handleFileChange} />
          <div className="card-actions justify-center ">
            <button 
            className="btn btn-secondary mt-3"
            onClick={handleFileSubmit}>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage
