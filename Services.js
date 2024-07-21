import React from 'react';
import './Services.css';

const Services=()=> {
  return (
    <section className="bg-04">
    <div className="container">
        <div className="row">
           <div className="col-12">
                <div className="heading">
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div> 
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <article className="_lk_bg_sd_we">
                  <div className="_bv_xs_we"></div>
                  <div className="_xs_we_er">
                    <div className="_he_w">
                      <h3>Easy English Learning Way</h3>
                      <ol>
                        <li><span>by</span> admin<span className="_mn_cd_xs">june 30, 2020</span></li>
                      </ol>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                  </div>     
                </article>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <article className="_lk_bg_sd_we">
        
                  <div className="_xs_we_er">
                    <div className="_he_w">
                      <h3>Summer Course Start From 1st June</h3>
                      <ol>
                        <li><span>by</span> admin<span className="_mn_cd_xs">june 30, 2020</span></li>
                      </ol>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                  </div>     
                </article>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <article className="_lk_bg_sd_we">
            
                  <div className="_xs_we_er">
                    <div className="_he_w">
                      <h3>Guest Interview will Occur Soon</h3>
                      <ol>
                        <li><span>by</span> admin<span className="_mn_cd_xs">june 30, 2020</span></li>
                      </ol>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                  </div>     
                </article>
            </div>
        </div>
    </div>
</section>
  )
}
export default Services;
