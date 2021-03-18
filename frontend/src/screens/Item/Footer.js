import { Component } from "react";
import { withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Footer extends Component{
    
    render(){

        return (
            <div className="footer">
               <div className="footer_top">
                   <div className="wrap">
                       <div className="wrap_float">
                           <div className="footer_head_mobile">
                               <div className="logo">lavella</div>
                               <div className="text">
                                   Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                               </div>
                           </div>
                           <div className="footer_top_menu">
                           <ul>
                          <li>
                              Home
                          </li>
                          <li className="dropdown_li">
                              About
                          </li>
                          <li className="dropdown_li">
                              Services
                          </li>
                          <li className="dropdown_li">
                              Destination
                          </li>
                          <li className="dropdown_li">
                              Contact

                          </li>
                          <li className="dropdown_li">
                           
                            
                          </li>
                          
                         
                        </ul>
                           </div>
                           <div className="socials">
                               <a href="#" className="a facebook"></a>
                               <a href="#" className="a instagram"></a>
                               <a href="#" className="a pinterest"></a>
                               <a href="#" className="a twitter"></a>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="footer_center">
                   <div className="wrap">
                       <div className="wrap_float">
                           <div className="footer_center_left">
                               <a href="index.html" className="logo">Zaghouan</a>
                               <div className="text">
                                   Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                               </div>
                           </div>
                           <div className="footer_center_menu">
                               <ul>
                                   <li><a href="#">Newsletter</a></li>
                                   <li><a href="#">Family Friendly Tours</a></li>
                                   <li><a href="#">Outdoor Activites</a></li>
                                   <li><a href="#">Relaxation Tours</a></li>
                                   <li><a href="#">City Tours</a></li>
                                   <li><a href="#">Holiday & Seasonal Tours</a></li>
                                   <li><a href="#">Cultural & Thematic Tours</a></li>
                                   <li><a href="#">Wild & Adventure Tours</a></li>
                               </ul>
                           </div>
                           <div className="footer_center_right">
                               <div className="_title">CONTACTS</div>
                               <div className="text">
                                   <p>Address: <b>12 Main Street Pt. London</b> </p>
                                    <p>Phone: <a href="#">+1 1235 6789 10</a></p>
                                    <p><a href="#">info@hellodigi.ru</a></p>
                               </div>
                           </div>
                           <div className="mobile_socials">
                               <a href="#" className="a facebook"></a>
                               <a href="#" className="a instagram"></a>
                               <a href="#" className="a pinterest"></a>
                               <a href="#" className="a twitter"></a>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="footer_bottom">
                   Copyright 2020 <a href="#">hellodigi.ru</a> | All Right Reserved
               </div>
           </div>
    
        );

    }
    
}

export default withTranslation()(Footer);