import React, {useState} from 'react'
import './Login.css'
import Navbar from './navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";
import app from './firebase'
import 'firebase/compat/auth'


const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  const handleSubmit=(event)=>{
    event.preventDefault()
    app.auth().sendPasswordResetEmail(email)
}


  // function resetPassword(email){
  //     return 
  // }

  // const value = {resetPassword}

    return (
        
            <>
            <div className='bg'>
            <Navbar/>
            <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>Reset Password</h3>
            
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="email" name={email} onChange={(e) => setEmail(e.target.value)}/>
          
          <button type='submit'  className='btn btn-light' >Reset Password</button>
       
          <p className="message"><Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
    </div>
    <Footer/>
            </>
    
    )
}

export default ForgotPassword