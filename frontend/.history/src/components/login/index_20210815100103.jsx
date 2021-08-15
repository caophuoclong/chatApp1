import axios from 'axios';
import React from 'react';
import FormLogin from "./formLogin"
import { useHistory } from 'react-router-dom';
import axiosClient from '../../axios/axiosClient';

function Login(props) {
    const history = useHistory();
    const handleFormSubmit = async (data,e)=>{
        e.preventDefault();
        const response = await axiosClient.post("/auth/login",data).catch(error=>{
            alert("Sai tai khoan hoac mat khau!");
            throw error;
        });
        const token = window.localStorage.setItem("token", response.data);

        
    }
    return (
        <div className="form-login h-screen w-full" >
            <FormLogin onSubmitForm={handleFormSubmit}/>
        </div>
    );
}

export default Login;