import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addvideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddStatus}) {
    // create a state to hold data from input
    const [video,setVideo] = useState({
        caption:"",
        image:"",
        url:""
    }) 

    const [show, setShow] = useState(false);

    // function for close the modal
    const handleClose = () => {
        setShow(false);
        setVideo({
            caption:"",
            image:"",
            url:""
        })
    }
    const handleShow = () => setShow(true);

    // function to validate video url
    const validateLink =(e)=>{
        // console.log(e.target.value);
        const link = e.target.value
        if(link.endsWith('feature=shared')){
            const yTkey = link.slice(-26,-15)
            console.log(yTkey);
            let embededLink = `https://www.youtube.com/embed/${yTkey}`
            setVideo({...video,url:embededLink})
        }
        else if(link.startsWith('https://youtu.be/')){
            const yTkey = link.slice(17,28)
            console.log(yTkey);
            let embededLink = `https://www.youtube.com/embed/${yTkey}`
            setVideo({...video,url:embededLink})
        }
        else{
            const yTkey = link.slice(-11)
            console.log(yTkey);
            let embededLink = `https://www.youtube.com/embed/${yTkey}`
            setVideo({...video,url:embededLink})
        }
    }
    
    // function for upload the video
    const videoUpload = async (e)=>{
        e.preventDefault()    //to avoid losing of data

        const {caption, image, url} = video   //object destructuring
        if (!caption || !image || !url) {
            toast.info(`please fill the form completely`)
        }
        else{
           const result = await addvideoApi(video)
           console.log(result);
           if(result.status>=200 && result.status<300){
            toast.success('video uploaded successfully')
            setAddStatus(result.data)
            handleClose()
           }
           else{
            toast.error('something went wrong')
           }
        }

    }

    // console.log(video);
  return (
    <>
    
    <div className="d-flex ">
        <h4 id='h'>Upload New Video</h4>
        <button id='s' className='btn mb-md-2' onClick={handleShow} ><FontAwesomeIcon  icon={faCloudArrowUp} size='xl' /></button>
       
    </div>

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please fill the following details</p>
                <form className='border p-3 rounded border-secondary'>
                    <input  type="text" placeholder='Video caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
                    <input  type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})}/>
                    <input  type="text" placeholder='Video url' className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="warning" onClick={(e)=>videoUpload(e)}>
                    Upload
                </Button>
            </Modal.Footer>
    </Modal>
    <ToastContainer theme='colored' position='top-center' autoClose={2500}/>
    </>
  )
}

export default Add