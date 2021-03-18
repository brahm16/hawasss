import React, { useState, useEffect,Component } from 'react';
import authSvg from '../../assests/update.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../helpers/auth';

import { useHistory } from "react-router-dom";

import { NavLink, Redirect  } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import LanguageSelect from "../LanguageSelect";


const Header=({history})=> {


  
  
  

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      role:''
    });
    const loadUser = () => {

      const token = getCookie('token');
      if(token){
        axios
        .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          const { role, name, email } = res.data;
          setFormData({ ...formData, role, name, email });
        })
        .catch(err => {
          toast.error(`Error To Your Information ${err.response.statusText}`);
          if (err.response.status === 401) {
            signout(() => {
              history.push('/login');
            });
          }
        });

      }
      
     
    }; 
    useEffect(() => {
      loadUser();
    }, []);
    const { name, email,  role } = formData;
    let his = useHistory();



    return (
      <div className="header">
        <div className="wrap">
          <div className="wrap_float">
            <div className="header__top">
              <div className="tel">
                <a href="tel:0000000000">+1 1235 6789 10</a>
              </div>
            
              <div className="email" >
                <div >
                <LanguageSelect />

                </div>
              </div>
              <div className="socials">
                <a href="#" className="a facebook"></a>
                <a href="#" className="a instagram"></a>
                <a href="#" className="a pinterest"></a>
                <a href="#" className="a twitter"></a>
              </div>
            </div>
            <div className="header__bottom">
              <div class="logo">
                <NavLink to="/home">
                  {" "}
                  <span className="my-title">Zaghouan</span>
                </NavLink>
              </div>
              
                  {
                    /* 
                    <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        innerRef={(input) => (this.password = input)}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="remember"
                          innerRef={(input) => (this.remember = input)}
                        />
                        Remember me
                      </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">
                      Login
                    </Button>
                  </Form>
                    */
                  }
                  
             

              <div className="menu" id="js-menu">
                <div className="close"></div>
                <div className="scroll">
                  <a className="current">Home</a>
                  <div className="scroll_wrap">
                    <ul>
                      <li className="dropdown_li">
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/"> Home</NavLink> 
                      </li>
                      <li className="dropdown_li">
                       <NavLink to="/about"> About</NavLink>
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/services">Services</NavLink>
                      </li>
                      <li className="dropdown_li">
                       <NavLink to="/places">Places</NavLink>
                      </li>
                      <li className="dropdown_li">
                       <NavLink to="/contact">Contact</NavLink>
                      </li>
                      <li className="dropdown_li">
                       
                        
                      </li>
                      <li className="dropdown_li">
               
                    <button
                  onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      his.push("/login")
                    });
                  }}
                  className='mt-5 tracking-wide font-semibold bg-pink-500 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-out-alt  w-6  -ml-2' />
                  <span className='ml-3'>Signout</span>
                </button>
                                                 <NavLink to="/login">  <span>Login</span></NavLink> 
                        
                      {/*  {
                          user.name ?
                          (""):
                          (
                            <NavLink to="/login">  <span>{t('login')}</span></NavLink>

                             
                          )
                        }
                           */}               </li>
                     
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="tel">
                      <a href="tel:+11235678910">+1 1235 6789 10</a>
                    </div>
                    <div className="email">
                      <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                    </div>
                    <div className="socials">
                      <div className="links">
                        <a href="#" className="fb"></a>
                        <a href="#" className="instagram"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="twitter"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mobile_btn" id="mobile_btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



export default (Header);
