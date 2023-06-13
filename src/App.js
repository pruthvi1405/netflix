import {Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
