import React from 'react';
import './Trainers.css';
import  '../images/team/1.jpg';
import '../images/team/2.jpg';
import '../images/team/3.jpg';
import '../images/team/4.jpg';

const Trainers=() =>{
  return (
    <section className="team">
    <div className="container">
        <div className="row">
          <div className="col-12">
              <div className="heading">
                  <h2>OUR TEAM</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam quo, ducimus aliquid quisquam minima perspiciatis repellendus, minus tenetur reiciendis quis? Consequatur perferendis deleniti, rerum delectus consectetur modi praesentium deserunt.</p>
              </div>
          </div>

          <div className="col-12">
              <div className="owl-carousel owl-stage-outer">
                  <div className="item">
                      <div className="team-card">
                          <div className="image-team">
                              <img src={'../images/team/1.jpg'} alt='' classNameName='w-100'/>
                          </div>
                          <div className="team-content">
                              <h3>John</h3>
                              <p>Web Developer</p>
                              <ol>
                                  <li><i className="fab fa-facebook-f"></i></li>
                                  <li><i className="fab fa-instagram"></i></li>
                                  <li><i className="fab fa-linkedin-in"></i></li>
                                  <li><i className="fab fa-pinterest-p"></i></li>
                              </ol>
                          </div>
                      </div>
                  </div>

                  <div className="item">
                      <div className="team-card">
                          <div className="image-team">
                              <img src={'../images/team/2.jpg'} alt='' classNameName='w-100'/>
                          </div>
                          <div className="team-content">
                              <h3>Anderson john</h3>
                              <p>Web Designer</p>
                              <ol>
                                  <li><i className="fab fa-facebook-f"></i></li>
                                  <li><i className="fab fa-instagram"></i></li>
                                  <li><i className="fab fa-linkedin-in"></i></li>
                                  <li><i className="fab fa-pinterest-p"></i></li>
                              </ol>
                          </div>
                      </div>
                  </div>

                  <div className="item">
                      <div className="team-card">
                          <div className="image-team">
                              <img src={'../images/team/3.jpg'} alt='' className='w-100'/>
                          </div>
                          <div className="team-content">
                              <h3>Sarah Se</h3>
                              <p>Web Designer</p>
                              <ol>
                                  <li><i className="fab fa-facebook-f"></i></li>
                                  <li><i className="fab fa-instagram"></i></li>
                                  <li><i className="fab fa-linkedin-in"></i></li>
                                  <li><i className="fab fa-pinterest-p"></i></li>
                              </ol>
                          </div>
                      </div>
                  </div>

                  <div className="item">
                      <div className="team-card">
                          <div className="image-team">
                              <img src={'../images/team/4.jpg'} alt='' classNameName='w-100'/>
                          </div>
                          <div className="team-content">
                              <h3>Williams</h3>
                              <p>English </p>
                              <ol>
                                  <li><i className="fab fa-facebook-f"></i></li>
                                  <li><i className="fab fa-instagram"></i></li>
                                  <li><i className="fab fa-linkedin-in"></i></li>
                                  <li><i className="fab fa-pinterest-p"></i></li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</section>
  )
}
export default Trainers;