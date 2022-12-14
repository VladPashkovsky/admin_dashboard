import React, { useEffect, useState } from 'react'
import './datafirebase.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumnsFirebase } from '../../dataTableSource'
import { Link } from 'react-router-dom'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'


const DataFirebase = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    //Fetch(data)
    // const fetchData = async () => {
    //   let list = []
    //   try {
    //     const querySnapshot = await getDocs(collection(db, 'users'))
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() })
    //     })
    //     setData(list)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    // fetchData()

    //Listen (Real time)
    const unsub = onSnapshot(collection(db, 'users'), (snapShot) => {
      let list = []
      snapShot.docs.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setData(list)
    }, (error) => console.log(error))
    return () => unsub()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id))
      setData(data.filter(item => item.id !== id))
    } catch (err) {
      console.log(err)
    }
  }


  const actionColumn = [
    {
      field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      },
    },
  ]


  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New User
        <Link to='/users/new' className='link' style={{ textDecoration: 'none' }}>Add new</Link>
      </div>
      <DataGrid className='datagrid'
                rows={data}
                columns={userColumnsFirebase.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
      />
    </div>
  )
}

export default DataFirebase