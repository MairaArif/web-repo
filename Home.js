import React from 'react';
import './Home.css';
import '../images/logo-01.png';
import {Link} from 'react-router-dom'

const Home=() =>{
  return (
    <div className="my-nav">
           <div className="container">
               <div className="row">
                   <div className="nav-items">
                     <div className="menu-toggle"></div>
                        <div className="logo">
                            <img src={'../images/logo-01.png'} alt='' className='w-100'/>
                        </div>
                        <div className="menu-items">
                            <div className="menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    

  )
}
export default Home;
