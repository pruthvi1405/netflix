import { useState } from 'react'
import './Login.css'
import SignUp from '../../Components/SignUp/SignUp'

function Login() {
  const [signIn,setSignIn]=useState(false)
  return (
    
    <div className='login'>
      <div className='background'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix_logo" className='login_logo'></img>
        <button className='login_button' onClick={()=>setSignIn(true)}>Sign In</button>
      </div>
      <div className='gradient'></div>
      {signIn?
      <SignUp/>:
      <div className='login_body'>
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time</h2>
        <h3>Ready to watch? Enter your email address to create or restart your membership</h3>
        <div className='form'>
            <form>
              <input type="email" placeholder="Email Address"></input>
              <button onClick={()=>setSignIn(true)}>GET STARTED</button>
            </form>
        </div>
      </div>
    } 
    </div>
  )
}

export default Login