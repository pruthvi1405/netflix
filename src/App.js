import './App.css';
import HomePage from './Pages/HomePage'
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';


function App() {
  const user=null
  return (
    <div className='app' >
      {!user?
      (<Login/>):
      (
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      </Routes>)
      }
    </div>
  );
}

export default App;
