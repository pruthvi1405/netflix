import './App.css';
import HomePage from './Pages/HomePage'
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import {auth} from './firebase'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';
import Profile from './Pages/Profile/Profile'


function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
        console.log(userAuth);
      }
      else{
        dispatch(logout());
      }
    })
  
    return unsubscribe;
  }, [dispatch])
  
  return (
    <div className='app' >
      {!user?
      (<Login/>):
      (
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>)
      }
    </div>
  );
}

export default App;
