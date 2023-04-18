import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useNavigate } from 'react-router-dom'
import { DarkModContext } from '../../context/darkModContext'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModContext)
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>admin@admin.com</span>
        </Link>
      </div>

      <hr />

      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PeopleAltOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>

          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <StoreOutlinedIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>

          <Link to='/orders' style={{textDecoration: 'none'}}>
            <li>
              <CreditCardOutlinedIcon className='icon' />
              <span>Orders</span>
            </li>
          </Link>

          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Delivery</span>
          </li>

          <p className='title'>USEFUL</p>

          <Link to='/calendar' style={{ textDecoration: 'none' }}>
            <li>
              <CalendarMonthIcon className='icon' />
              <span>Calendar</span>
            </li>
          </Link>

          <Link to='/faq' style={{textDecoration: 'none'}}>
            <li>
              <HelpOutlineIcon className='icon' />
              <span>FAQ</span>
            </li>
          </Link>

          <p className='title'>SERVICE</p>

          <Link to='/barchart' style={{textDecoration: 'none'}}>
            <li>
              <StackedBarChartIcon className='icon' />
              <span>Bar Chart</span>
            </li>
          </Link>

          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AssignmentIndOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li onClick={logOut}>
            <LogoutOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions'
             onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className='colorOptions'
             onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  )
}

export default Sidebar