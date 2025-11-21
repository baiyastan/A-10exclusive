import React from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
  return (
    <div className='signinBody'>
            <img src="" className='shop' alt="" />
            <div className='signinInput'>
                <div className='signinTxt'>
                    <h1>Log in to Exclusive</h1>
                    <h2>Enter your details below</h2>
                </div>
                <input type="text" placeholder='Email or Phone Number' />
                <input type="text" placeholder='Password' />
                <div className='signinBtn'>
                    <button>Log in</button>
                    <Link>Forget Password</Link>
                </div>
            </div>
        </div>
  )
}

export default Login
