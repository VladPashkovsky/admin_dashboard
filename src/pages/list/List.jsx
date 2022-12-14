import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataFirebase from '../../components/datafirebase/DataFirebase'

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        {/*<Datatable />*/}
        <DataFirebase />
      </div>
    </div>
  )
 }

export default List