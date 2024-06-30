import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllCategoryApi, getVideoApi, updateCategoryApi } from '../services/allAPI'

function View({addStatus, setDragStatus}) {

  // state which stores the video details
  const [videoDetails,setVideo] = useState([])

  // state of video deleting
  const [deleteVideoStatus, setDeleteVideoStatus] = useState([])

  // function for get the details of videos from server, which is a side effect
  const getVideo = async()=>{
    const result = await getVideoApi()
    setVideo(result.data)  //stored all fetched videoDetails details into video
  }

  // used to handle side effect getVideo()
  useEffect(()=>{
    getVideo()
  },[addStatus,deleteVideoStatus])

  // function dragover
  const dragOver=(e)=>{
    e.preventDefault()
  }

  // function for drop video
  const videoDrop=async(e)=>{
    const {videoId, categoryId} = JSON.parse(e.dataTransfer.getData("dataShared"))
    // console.log(videoId, categoryId);

    // get all category
    const {data} = await getAllCategoryApi()
    // console.log(data);

    // get selected Category
    const selectedCategory = data.find((item)=>item.id==categoryId)
    console.log(selectedCategory);

    // remove video from selected category
    const result =selectedCategory.allVideo.filter((item)=>item.id!=videoId)
    const reqBody={
      categoryName: selectedCategory.categoryName,
      allVideo: result,
      id: selectedCategory.id
    }

    // updating on backend
    await updateCategoryApi(categoryId, reqBody)
    setDragStatus(true)
  }

  return (
    <>
    <Row className='ms-md-1 ms-4' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>

      {videoDetails?.length>0?  //?videoDetails?.length is getting length of array affter fetching all data
        
        videoDetails.map((item)=>(
          <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>

            <Videocard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>

          </Col>
        ))
        
        :
        <p className='text-warning fs-5'>No Videos Uploaded Yet....</p>}

    </Row>
    </>
  )
}

export default View