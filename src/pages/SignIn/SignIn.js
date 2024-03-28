import React, { useState } from 'react'
import "./SignIn.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase"

const SignIn = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
        console.log(authUser);
    }).catch((err)=>{
        alert(err.message);
    });
  }

  const signIn = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
     .then((authUser)=>{
        console.log(authUser)
     })
     .catch((err)=>{
        alert(err.message)
     })
  }

  return (
    <div className='signIn'>
        <form>
            <h1>Sign In</h1>
            <input value={email} type="email" placeholder='Email Address' onChange={e=>setEmail(e.target.value)}/>
            <input value={password} type="password" placeholder='Password'onChange={e=>setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4>
                <span className='sign-gray'>New to Netflix? </span>
                <span className='sign-link' onClick={register}>Sign Up Now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignIn