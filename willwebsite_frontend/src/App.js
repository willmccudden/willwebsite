import HomePage from './Pages/HomePage/HomePage';
import ProjectLog from './Pages/ProjectLog/ProjectLog';
import Footer from './Components/Footer/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App (){
  return (
    <div>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/projectlog" element = {<ProjectLog/>}/>
        </Routes>
    <Footer/>
    </div>
  )

}

export default App;
