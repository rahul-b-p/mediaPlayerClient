import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {deleteWatchHistoryApi, getInWatchHistoryApi } from '../services/allAPI'
import { toast } from 'react-toastify'




function watchhistory() {

  // state cobtains details of video history data
  const [watchHistory,setWatchHistory] =useState([])

  // state which stores details of the history data going to be deleted
  const [deleteHistoryStatus, setDeleteHistoryStatus] =useState([])

  // function to get watch history details
  const getHistory =async()=>{
    const result = await getInWatchHistoryApi()
    setWatchHistory(result.data) //stored all fetched history data into watchHistory state
  }

  // handles the side effect getHistory
  useEffect(()=>{getHistory()},[deleteHistoryStatus])

  // function for Delete the video
  const deleteHistory = async(id)=>{
    const result = await deleteWatchHistoryApi(id)
    if (result.status>=200 && result.status<300){
      setDeleteHistoryStatus(result.data)
      toast.success('History Cleared')
    }
    else{
      toast.error('something went wromg')
    }
    
  }
  return (
    <>
      <div className='px-md-5 px-3  d-flex mt-5 w-100'>
        <h4>Watch History</h4>
        <h5 className='ms-auto'><Link to={'/home'} style={{color:'white', textDecoration:'none'}}><span id='h'><FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} className='me-md-3 me-1'/>Back to Home</span><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} className='ms-md-2 ms-1'/></Link></h5>
      </div>

      <div className="w-100 row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Table bordered responsive="sm ms-4 ms-md-0 mt-5" border={'primary'}>
          <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>TimeStamp</th>
                <th>Acttion</th>
              </tr>
            </thead>
            <tbody>
              {
                watchHistory?.length>0?

                watchHistory?.map((item,index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.caption}</td>
                    <td>{item.url}</td>
                    <td>{item.timestamp}</td>
                    <td><button type='button' onClick={()=>deleteHistory(item.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
                  </tr>
                ))
                :
                <tr>
                  <td colSpan={5} className='text-center'>⨂ No Data</td>
                </tr>
              }
              
            </tbody>
          </Table>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default watchhistory