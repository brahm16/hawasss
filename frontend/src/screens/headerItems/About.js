import React, { Component } from 'react'
import Header from '../Item/Header';

export default class About extends Component {
    render() {
        return (
            <>
            <Header/>

        
        <div className="breadcrumbs">
    <div className="wrap">
        <div className="wrap_float">
            <a href="#">Home</a>
            <span className="separator">/</span>
            <a href="#" className="current">About Us</a>
        </div>
    </div>
</div>
<div className="page_content single-page about-page">
    <div className="content-head">
        <div className="wrap">
            <div className="wrap_float">
                <div className="main">
                    <div className="section-top">
                        <div className="title">
                            About Us
                        </div>
                        <div className="slick-arrows about-slider-arrows">
                            <div className="arrow prev"></div>
                            <div className="arrow next"></div>
                        </div>
                    </div>
                    <div className="about-slider" id="about-slider">
                        <div className="about-slide">
                            <img src="img/about2.jpg" alt="" className="image-cover" />
                        </div>
                        <div className="about-slide">
                            <img src="img/about3.jpg" alt="" className="image-cover" />
                        </div>
                        <div className="about-slide">
                            <img src="img/about4.jpg" alt="" className="image-cover" />
                        </div>
                    </div>
                   <div className="description">
                       <div className="description-title">
                           Amet Etiam Quam
                       </div>
                       <div className="text">
                           <div className="left">
                               <p>
                                   Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               </p>
                               <p>
                                   Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor
                               </p>
                           </div>
                           <div className="right">
                               <p>
                                   Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               </p>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
    <div className="content-body">
        <div className="wrap">
            <div className="wrap_float">
                <div className="statistic" id="statistic">
                    <div className="stat-item">
                        <div className="val spincrement" data-start="50">357</div>
                        <div className="text">People in the team</div>
                    </div>
                    <div className="stat-item" data-start="1150">
                        <div className="val spincrement">34354</div>
                        <div className="text">Travel this year</div>
                    </div>
                    <div className="stat-item">
                        <div className="val spincrement" data-start="850">1998</div>
                        <div className="text">We have been working since 1998</div>
                    </div>
                </div>
                <div className="team">
                    <div className="team_title">Team</div>
                    <div className="section_content">
                        <div className="item">
                            <div className="item_image">
                                <div className="sq_parent">
                                   <div className="sq_wrap">
                                       <div className="sq_content">
                                           <img src="img/about1.jpg" alt="" />
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div className="item_info">
                                <div className="item_title">Jeanette Kingston</div>
                                <div className="item_position">Chief Executive Officer</div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="item_image">
                                <div className="sq_parent">
                                   <div className="sq_wrap">
                                       <div className="sq_content">
                                           <img src="img/about5.jpg" alt="" />
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div className="item_info">
                                <div className="item_title">Jeanette Kingston</div>
                                <div className="item_position">Chief Executive Officer</div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="item_image">
                                <div className="sq_parent">
                                   <div className="sq_wrap">
                                       <div className="sq_content">
                                           <img src="img/about6.jpg" alt="" />
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div className="item_info">
                                <div className="item_title">Jeanette Kingston</div>
                                <div className="item_position">Chief Executive Officer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </>
          );
    }
}
