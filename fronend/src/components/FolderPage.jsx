import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'

const FolderPage = () => {

  const [files, setFiles] = useState()

  const {id} = useParams()
  const getFiles = async() => {
    try{
      const res = await axios.get(`${BASE_URL}file/get/${id}`, {withCredentials: true})
      console.log(res.data)
      setFiles(res.data)
      
    } catch (err){
      console.log(err)
    }
  }

  
  useEffect(() => {
    getFiles()
  }, [])
  console.log(files)
  return (
    <div className='flex flex-wrap'>
    {files && 
      files.map((file) => (
        <div className="card w-96 bg-base-300 card-lg shadow-sm m-5">
        <div className="card-body">
          <p>{file.name}</p>
          <p>{file.size}</p>
          <p>{file.uploadTime}</p>
          <div className="justify-end card-actions">
            
            <a href={file.file_url}>
            <button className="btn btn-primary">Download</button>
            </a>
          </div>
        </div>
      </div>
      ))
      
    }
    </div>
    
  )
}

export default FolderPage
