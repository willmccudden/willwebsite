import HomePage from './Pages/HomePage/HomePage';
import ProjectLog from './Pages/ProjectLog/ProjectLog';
import Footer from './Components/Footer/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import {useState,useEffect} from 'react'

function App (){
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (width < 801){
    return (
      <h2>
        Please View website on a larger screen... I'm currently developing the website for mobile devices.
      </h2>
    )
  } else {
    return (
      <div className='background'>
          <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "/projectlog" element = {<ProjectLog/>}/>
          </Routes>
      <Footer/>
      </div>
    )
  }

}

export default App;
