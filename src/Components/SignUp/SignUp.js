import './Signup.css'

function SignUp() {
  return (
    <div className='signup'>
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email Address'></input>
            <input type="password" placeholder='Password'></input>
            <button type='submit'> Sign In</button>
            <h4><span className='signup_gray'>New to Netflix.</span>
            <span className='signup_link'>Sign up Now</span> </h4>
        </form>
    </div>
  )
}

export default SignUp