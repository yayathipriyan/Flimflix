import React from 'react'
import "./Profile.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import Nav from '../../components/Nav/Nav'
import ulogo from "../../assets/user-logo.png"
import {signOut} from "firebase/auth"
import {auth} from "../../firebase"
import Plans from '../../components/Plans/Plans'

const Profile = () => {
  const user = useSelector(selectUser);
  const logout = ()=>{
    signOut(auth);
  }
  return (
    <div className='profile'>
        <Nav/>
        <div className='profile-body'>
            <h1>Edit Profile</h1>
            <div className='profile-info'>
                <img src={ulogo} alt=''></img>
                <div className='profile-details'>
                    <h2>{user.email}</h2>
                    <div className='profile-plans'>
                        <h3>Plans</h3>
                        <Plans/>
                        <button className='profile-signout' onClick={logout}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile