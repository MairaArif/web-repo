import React from 'react';
import './Aboutus.css';

const Aboutus=() =>{
  return (
    <section className="bg-01">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="se-box">
                    <div className="icon">
                       <i className="fal fa-chalkboard-teacher"></i>
                    </div>
                    <div className="content">
                        <h3>Professional Teachers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
               <div className="se-box">
                   <div className="icon">
                       <i className="fal fa-globe-americas"></i>
                   </div>
                   <div className="content">
                       <h3>Learn Anywhere Online</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                   </div>
               </div>
           </div>

           <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
               <div className="se-box">
                   <div className="icon">
                       <i className="fal fa-graduation-cap"></i>
                   </div>
                   <div className="content">
                       <h3>Graduation Certificate</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                   </div>
               </div>
           </div>

           <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
               <div className="se-box">
                   <div className="icon">
                       <i className="fal fa-backpack"></i>
                   </div>
                   <div className="content">
                       <h3>Over 1000 Scholarship</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                   </div>
               </div>
           </div>
        </div>
    </div>
</section>
  )
}
export default Aboutus;
