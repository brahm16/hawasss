import React, { useState, useEffect,Component } from 'react';
import authSvg from '../assests/update.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
const HomeUser=({history})=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role:''
      });
      const loadUser = () => {
        const token = getCookie('token');
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
      }; 
      useEffect(() => {
        loadUser();
      }, []);
      const { name, email,  role } = formData;

 
        return (
            <div>
                {name}
            </div>
        )
    
}
export default HomeUser;
