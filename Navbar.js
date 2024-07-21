import React from 'react';
import './Navbar.css';
import  '../images/slider/1.jpg';
import '../images/slider/2.jpg';
import '../images/slider/3.jpg';

const Navbar=() =>{
  return (
    <section id="carouselExampleFade" className="carousel slide carousel-fade slider" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={'../images/slider/1.jpg'} alt='' className='w-100'/>
            <div className="carousel-caption">
                <h2>Best Education For Diploma</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.</p>
                <div className="button-01">
                    <ul>
                        <li>Get Started Now</li>
                        <li>View Courses </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="carousel-item">
        <img src={'../images/slider/2.jpg'} alt='' className='w-100'/>
        <div className="carousel-caption">
            <h2>Best Education For Diploma</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.</p>
            <div className="button-01">
                <ul>
                    <li>Get Started Now</li>
                    <li>View Courses</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="carousel-item">
        <img src={'../images/slider/3.jpg'} alt='' className='w-100'/>
        <div className="carousel-caption">
            <h2>Best Education For Diploma</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.</p>
            <div className="button-01">
                <ul>
                    <li>Get Started Now</li>
                    <li>View Courses</li>
                </ul>
            </div>
        </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
</section>
  )
}
export default Navbar;
