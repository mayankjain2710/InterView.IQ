import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios'
import InterviewPage from './pages/InterviewPage.jsx'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewHistory from './pages/InterviewHistory.jsx'
import Pricing from './pages/Pricing.jsx'
import InterviewReport from './pages/InteriewReport.jsx'

export const ServerUrl = "http://localhost:8000"

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{

    const getUser = async ()=>{
      try {
        
        const result = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials:true})
        dispatch(setUserData(result.data))

      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }
    getUser()

  }, [dispatch]) 


  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/interview' element={<InterviewPage/>}></Route>
      <Route path='/history' element={<InterviewHistory/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/report/:id' element={<InterviewReport/>}></Route>

    </Routes>
  )
}

export default App
