import React from 'react';
import './Courses.css';
import  '../images/featured/1.jpg';
import  '../images/featured/2.jpg';
import  '../images/featured/3.jpg';
import  '../images/featured/4.jpg';
import  '../images/featured/5.jpg';
import  '../images/featured/6.jpg';

const Courses=()=> {
  return (
<section className="bg-02">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="heading">
                          <h2>Featured courses</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam quo, ducimus aliquid quisquam minima perspiciatis repellendus, minus tenetur reiciendis quis? Consequatur perferendis deleniti, rerum delectus consectetur modi praesentium deserunt.</p>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="featured-box">
                          <div className="feature-card">
                              <i className="far fa-link"></i>
                              <img src={'../images/featured/1.jpg'}alt='' className='w-100'/>
                          </div>
                          <div className="content">
                            <h3>MBA</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor</p>
                            <ol>
                                <li>3 Year Course</li>
                                <li>100 Clasess</li>
                                <li>10 am - 1 pm</li>
                            </ol>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="featured-box">
                        <div className="feature-card">
                            <i className="far fa-link"></i>
                            <img src={'../images/featured/2.jpg'}alt='../images/featured/2.jpg' className='w-100'/>
                        </div>
                        <div className="content">
                          <h3>BE</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor</p>
                          <ol>
                              <li>3 Year Course</li>
                              <li>100 Clasess</li>
                              <li>10 am - 1 pm</li>
                          </ol>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="featured-box">
                        <div className="feature-card">
                            <i className="far fa-link"></i>
                            <img src={'../images/featured/3.jpg'} alt='' className='w-100'/>
                        </div>
                        <div className="content">
                          <h3>ME</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor</p>
                          <ol>
                              <li>3 Year Course</li>
                              <li>100 Clasess</li>
                              <li>10 am - 1 pm</li>
                          </ol>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="featured-box">
                        <div className="feature-card">
                            <i className="far fa-link"></i>
                            <img src={'../images/featured/4.jpg'}alt='' className='w-100'/>
                        </div>
                        <div className="content">
                          <h3>MBBS</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor</p>
                          <ol>
                              <li>3 Year Course</li>
                              <li>100 Clasess</li>
                              <li>10 am - 1 pm</li>
                          </ol>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="featured-box">
                        <div className="feature-card">
                            <i className="far fa-link"></i>
                            <img src={'../images/featured/5.jpg'}alt='' className='w-100'/>
                        </div>
                        <div className="content">
                          <h3>MSC</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor</p>
                          <ol>
                              <li>3 Year Course</li>
                              <li>100 Clasess</li>
                              <li>10 am - 1 pm</li>
                          </ol>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="featured-box">
                        <div className="feature-card">
                            <i className="far fa-link"></i>
                            <img src={'../images/featured/6.jpg' }alt='' className='w-100'/>
                        </div>
                        <div className="content">
                          <h3>MA</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor</p>
                          <ol>
                              <li>3 Year Course</li>
                              <li>100 Clasess</li>
                              <li>10 am - 1 pm</li>
                          </ol>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>

     
  )
}
export default Courses;
