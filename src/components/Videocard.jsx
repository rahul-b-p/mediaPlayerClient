import { useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import {addToWatchHistoryApi, deleteVideoApi } from '../services/allAPI';
import { toast } from 'react-toastify';


function Videocard({displayVideo, setDeleteVideoStatus, isInCategory}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      let caption = displayVideo?.caption
      let url = displayVideo?.url
      let time = new Date()
      let timestamp = new Intl.DateTimeFormat("en-GB",{year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"}).format(time)

      const reqBody={caption,url,timestamp}
      await addToWatchHistoryApi(reqBody)
      // console.log(timestamp);
    }
    // function for delete button
    const deleteVideo = async(id) =>{
      const result = await deleteVideoApi(id)
      if(result.status>=200 && result.status<300){
        setDeleteVideoStatus(result.data)
      toast.success('Video Deleted Successfully')
      }
      else{
        toast.error('something went wrong')
      }
      
      
    }

    // Drag Function
    const videoDrag=(e, id)=>{
      // console.log(`card id = ${id}`);
      e.dataTransfer.setData("videoid",id)
    }

    // console.log(displayVideo);
  return (
    <>
    <Card style={{ width: '100%' }} className='mt-5' draggable onDragStart={(e)=>videoDrag(e, displayVideo?.id)}>
        {!isInCategory && <Card.Img onClick={handleShow} variant="top" alt='image not loaded' src={displayVideo?.image} height={'300px'} width={'100%'} />}
        <Card.Body onClick={handleShow} className='d-flex'>
            <Card.Text>{displayVideo?.caption}</Card.Text>
            {! isInCategory && <button type='button' onClick={()=>deleteVideo(displayVideo?.id)} className='ms-auto btn btn-danger'><FontAwesomeIcon icon={faTrash} style={{color: "#FFFFFF",}} size='sm' /></button>}
      
        </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="300" src={`${displayVideo?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="autoplay;accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
    </Modal>
    </>
  )
}

export default Videocard