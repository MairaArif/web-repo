import React from 'react';
import './Contact.css';

const Contactus=() =>{
  return (
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                <div class="_kl_de_w">
                    <h3>SMART GROUP</h3>
                    <p>ipsum dolor sit amet, Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                <div class="_kl_de_w">
                    <h3>Quick Links</h3>
                    <ol>
                        <li><i class="far fa-angle-right"></i>home</li>
                        <li><i class="far fa-angle-right"></i>About Us</li>
                        <li><i class="far fa-angle-right"></i>Services</li>
                        <li><i class="far fa-angle-right"></i>Blog</li>
                        <li class="last"><i class="far fa-angle-right"></i>Contact Us</li>
                    </ol>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                <div class="_kl_de_w">
                    <h3>Courses</h3>
                    <ol>
                        <li><i class="far fa-angle-right"></i>MBA</li>
                        <li><i class="far fa-angle-right"></i>ME</li>
                        <li><i class="far fa-angle-right"></i>BE</li>
                        <li><i class="far fa-angle-right"></i>MBBS</li>
                        <li class="last"><i class="far fa-angle-right"></i>MA</li>
                    </ol>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                <div class="_kl_de_w">
                    <h3>Contact Us</h3>
                    <form class="my-form">
                        <div class="form-group">
                           <input class="form-control" type="emal" name="email" placeholder="Email"/> 
                        </div>
                        <div class="form-group">
                            <textarea rows="3" placeholder="Message" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <a href="#">Submit</a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-12">
                <div class="copy-right">
                    <p>© 2020 All Rights Reserved by<a href="https://www.smarteyeapps.com/">Smarteyeapps.com</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Contactus;
