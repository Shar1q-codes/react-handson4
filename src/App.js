import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact';

function App() {
  return (
     <BrowserRouter>
      <div class="navbar navbar-dark bg-dark" id='navBar'>
          <div><button className='btn btn-outline-primary'><Link to={'/home'}>Home</Link> </button></div>
          <div><button className='btn btn-outline-danger'><Link to={'/students'}>Student</Link> </button></div>
          <div><button className='btn btn-outline-success'><Link to={'/contact'}>Contact Us</Link> </button></div>
      </div>
     <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/students" element={<Students />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;