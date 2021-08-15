import axios from 'axios';
import React from 'react';
import FormLogin from "./formLogin"
import "./formLogin.scss";
import { useHistory } from 'react-router-dom';
import jwt from "jsonwebtoken";
import { serectKey } from '../../serectKey';
function Login(props) {
    const history = useHistory();
    const handleFormSubmit = async (data,e)=>{
        e.preventDefault();
        const response = await axios.post(url,data);
        if(response){?
        else{
            alert("Dang nhap that bai");
        }
        
    }
    return (
        <div  >
            <FormLogin onSubmitForm={handleFormSubmit}/>
        </div>
    );
}

export default Login;