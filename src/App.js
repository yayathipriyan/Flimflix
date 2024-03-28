import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import "./App.css";
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Profile from './pages/Profile/Profile';

const App = () => {
  const user=useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
       dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email
       })) 
      }
      else{
        dispatch(logout())
      }
    })

    return unsubscribe
  },[])

  return (
    <div className='app'>
      <Router>
        {
          !user?(
            <Login/>
          )
          :
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App