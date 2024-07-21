import { } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Aboutus from './Component/Aboutus';
import Courses from './Component/Courses';
import Trainers from './Component/Trainers';
import Services from './Component/Services';
import Contactus from './Component/Contactus';


function App() {
  return (
    <Fragment>
      <Home />
      <Navbar />
      <Aboutus />
      <Courses />
      <Trainers />
      <Services />
      <Contactus />
    </Fragment>
  )
    
    


  
}

export default App;
