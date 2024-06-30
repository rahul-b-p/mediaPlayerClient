import { faPencil, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Videocard from './Videocard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AvideoApi, addCategoryApi, deleteCategoryApi, getAllCategoryApi, updateCategoryApi } from '../services/allAPI';
import { toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';




function Category({dragStatus, setDragStatus}) {

  const [show, setShow] = useState(false);

  const [categoryName,setCategoryName] = useState("")

  const [watchCategory, setwatchCategory] = useState([])

  const [addCategoryStatus, setAddCategoryStatus] = useState([])

  const [deleteCategoryStatus, setDeleteCategoryStatus] =useState([])

  const handleClose = () => {
    setCategoryName("")
    setShow(false);
  }
  const handleShow = () => setShow(true);

  // add Category Function
  const addCategory =async()=>{
    if(categoryName){
      const reqBody={
        categoryName,
        allVideo: []
      }
  
      const result = await addCategoryApi(reqBody)
      // console.log(result);
      if (result.status>=200 && result.status<300){
        handleClose()
        setAddCategoryStatus(result.data.id)
        toast.success('New Cateogry Added Successfully')
      }
      else{
        console.log(result);
        toast.error('Something went wrong')
      }
    }
    else{
      toast.info('Please enter a category name')
    }
  }
  
  // get Category function
  const getcategory = async()=>{
    const result = await getAllCategoryApi()
    if (result.status>=200 && result.status<300 ){
      setwatchCategory(result.data)
      // console.log(result);
    }
    
  }
  // to handle getCategory Function
  useEffect(()=>{
    getcategory()
    setDragStatus(false)
  },[addCategoryStatus, deleteCategoryStatus, dragStatus])

  // delete Category Function
  const deleteCategory=async(id)=>{
    const result = await deleteCategoryApi(id)
    if (result.status>=200 && result.status<300 ) {
      setDeleteCategoryStatus(result.data)
      toast.success('Category removed Successfully')
    }
    else{
      toast('Category Added Succesfully')
    }
  }

  // drag over function
  const dragOver=(e)=>{
    e.preventDefault()
  }


  // videoDrop Function
  const videoDrop=async(e, categoryId)=>{
    // acccessing video id from view component
    const vidId= e.dataTransfer.getData("videoId")
    
    // get video details from backend
    const {data} = await AvideoApi(vidId)
    
    // getting the selectod category id 
    const selectedCategory = watchCategory.find((item)=>item.id==categoryId)

    if (selectedCategory.allVideo.find((item)=>item.id==data.id)) {
      toast.warning('video already added in category')
    }
    else{
      // pushing the video details into selected category
      selectedCategory.allVideo.push(data)
      // console.log(selectedCategory);
    }

    await updateCategoryApi(categoryId, selectedCategory)
    getcategory()
    
    
  }
  // console.log(watchCategory);


  // function to drag the video in category outside
  const dragBack=(e,videoId,categoryId)=>{
    // console.log(videoId,categoryId);
    let dataShare={videoId, categoryId}
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
  }

  return (
    <>
      <div className='w-100 mt-2 p-4'>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add Category<FontAwesomeIcon icon={faPlus} className='ms-3' /></button>
      </div> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPencil} className='text-warning me-3' />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='w-100 border rounded p-4 border-secondary'>
            <label >Category Name</label>
            <input type="text" placeholder='Enter Category Name' className='form-control mt-3' onChange={(e)=>setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="w-100 mt-md-5 mt-2">
        {
          watchCategory?.length>0?
          watchCategory.map((item)=>(
            <div className="border border-secondary mt-3 rounded p-3 ms-4 ms-md-0" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e, item.id)} >
              <div className="d-flex">
                <h6>{item.categoryName}</h6>
                <button type='button' onClick={()=>deleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
              </div>
                <Row>
                  {item?.allVideo?.length>0?
                    item?.allVideo?.map((videoItem)=>(<Col sm={12} draggable onDragStart={(e)=>dragBack(e, videoItem.id, item.id)}>
                      <Videocard displayVideo={videoItem} isInCategory={true} />
                    </Col>))
                    
                    :null
                  }
                </Row>
            </div>
          ))
          
        
        : null
        
        }
      </div>
    </>
  )
}

export default Category