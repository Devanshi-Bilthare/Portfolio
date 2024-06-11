import './App.css';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Pages/About/About.jsx';
// import Project from './Pages/Project/Project';
import ProjectParent from './Pages/Project/ProjectParent'
import Cursor from './Components/Cursor/Cursor';

function App() {
  return (
    <BrowserRouter>
    <div id='main'>
      <Navbar/>
      <Cursor/>
      
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/project' element={<ProjectParent/>} />
          </Routes>
     
      <Sidebar/>
      </div>
    </BrowserRouter>
   
  );
}

export default App;

