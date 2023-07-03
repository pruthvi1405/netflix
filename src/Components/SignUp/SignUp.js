import './Signup.css'
import {useRef} from 'react';
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";

function SignUp() {

  const emailRef=useRef(null);
  const passwordRef=useRef(null)
  const navigate = useNavigate();

  const signIn=(e)=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
  }).catch((err)=>{
    alert(err.message)
  })
  }
  const register=(e)=>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value).then((authUser)=>{
          console.log(authUser)
      }).catch((err)=>{
        alert(err.message)
      })
  }

  return (
    <div className='signup'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email Address'></input>
            <input ref={passwordRef} type="password" placeholder='Password'></input>
            <button type='submit' onClick={signIn}> Sign In</button>
            <h4><span className='signup_gray'>New to Netflix? </span>
            <span className='signup_link' onClick={register}>Sign up Now</span> </h4>
        </form>
    </div>
  )
}

export default SignUp