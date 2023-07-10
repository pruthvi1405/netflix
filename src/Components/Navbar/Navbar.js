import React from 'react'
import './Navbar.css'
import { useEffect,useState } from 'react'
import { useNavigate} from "react-router-dom";

function Navbar() {
const navigate = useNavigate();
const [show,setShow]=useState(false);
const setNavShow=()=>{
  if(window.scrollY===0){
    setShow(false)
  }
  else{
    setShow(true)
  }

}

useEffect(() => {
  window.addEventListener("scroll",setNavShow)

  return () => {
    window.removeEventListener("scroll",setNavShow)
  }
}, [])

  return (
    <div className='nav_bar' style={{backgroundColor:`${show?'black':''}`}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix_logo" className='logo' onClick={()=>{navigate("/")}}/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_profile" className='profile' onClick={()=>{navigate("/profile")}}/>
    </div>
  )
}

export default Navbar