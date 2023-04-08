import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/charts/Chart'
import MyTable from '../../components/table/MyTable'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from '@mui/material/Tooltip'


const SingleProduct = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const newData = onSnapshot(doc(db, 'products', id), (doc) => {
      setData({...doc.data()})
    })
    return () => newData()
  }, [id])

  const goBack = () => navigate('/products')
  const goEdit = () => navigate(`/editproduct/${id}`)


  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='buttons'>
              <Tooltip title='Back' placement='bottom-start'>
                <div className='backButton' onClick={goBack}>
                  <ArrowBackIcon />
                </div>
              </Tooltip>
              <Tooltip title='Edit Product' placement='bottom-start'>
                <div className='editButton' onClick={goEdit}>Edit</div>
              </Tooltip>
            </div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src={data.img} alt=''
                   className='itemImg' />
              <div className='details'>
                <h1 className='itemTitle'>{data.category}</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Title: </span>
                  <span className='itemValue'>{data.title}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Price: </span>
                  <span className='itemValue'>{data.price}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Description: </span>
                  <span className='itemValue'>{data.description}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User spending ( Last 6 month )' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <MyTable />
        </div>
      </div>
    </div>
  )
}

export default SingleProduct