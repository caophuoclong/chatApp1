import axios from 'axios';
import React from 'react';
import FormLogin from "./formLogin"
import "./formLogin.scss";
import {uri} from "../../axiosClient/apiAxiosClient";
import { useHistory } from 'react-router-dom';
import jwt from "jsonwebtoken";
import { serectKey } from '../../serectKey';
function Login(props) {
    const history = useHistory();
    const handleFormSubmit = async (data,e)=>{
        e.preventDefault();
        const url = uri +"/auth/login";
        const response = await axios.post(url,data);
        if(response){
        const token = response.data;
        window.localStorage.setItem("token", JSON.stringify(token));
        try{
            jwt.verify(token, serectKey, (error, data)=>{
                if(error) throw error;
                history.push(`/dashboard/${data.id}`);
            })
        
    }catch(error){
        console.log(error);
    }
        
    }
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