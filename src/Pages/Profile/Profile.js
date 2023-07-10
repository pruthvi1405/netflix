import Navbar from '../../Components/Navbar/Navbar';
import './Profile.css'
import {auth} from "../../firebase"
import {useSelector} from 'react-redux'
import { selectUser } from '../../features/userSlice';



function Profile() {

    const user=useSelector(selectUser)

  return (
    <div className='profileScreen'>
        <Navbar/>
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_profile" className='profile_logo'/>
            <br></br>
            <h4>{user.email}</h4>
        <button onClick={()=>auth.signOut()}>LOGOUT</button>
        </div>
    </div>
  )
}

export default Profile