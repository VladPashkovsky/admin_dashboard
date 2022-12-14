import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import Products from './pages/products/Products'
import { userInputs, productInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModContext } from './context/darkModContext'
import { AuthContext } from './context/AuthContext'
import NewProduct from './pages/new/NewProduct'
import SingleProduct from './pages/single/SingleProduct'

function App() {
  const { darkMod } = useContext(DarkModContext)

  const { currentUser } = useContext(AuthContext)


  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to='/login' />
  }

  return (
    <div className={darkMod ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />

            <Route path='users'>
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=':id' element={<RequireAuth><Single /></RequireAuth>} />
              <Route path='new' element={<RequireAuth><New inputs={userInputs} /></RequireAuth>}
                     title='Add New User' />
            </Route>
            <Route path='products'>
              <Route index element={<RequireAuth><Products /></RequireAuth>} />
              <Route path=':id' element={<RequireAuth><SingleProduct /></RequireAuth>} />
              <Route path='new' element={<RequireAuth><NewProduct inputs={productInputs} /></RequireAuth>}
                     title='Add New Product' />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
