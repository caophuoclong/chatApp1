import React from 'react';
import RegisterForm from './formRegister';
import "./register.scss";
import {uri} from "../../axiosClient/apiAxiosClient"
import axios from "axios";
import { useHistory } from 'react-router-dom';
function Register(props) {
    const history = useHistory();
    const handleOnSubmit = async (data, e)=>{
        e.preventDefault();
        const url = uri + "/auth/register";
        const response = await axios.post(url,data);
        console.log(response.status);
        if(response.status === 200){
            history.push(response.data.url);
        }
        else{
            alert("Loi dang ky, vui long thu lai sau");
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleOnSubmit}/>
        </div>
    );
}

export default Register;