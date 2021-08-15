import React from 'react';
import RegisterForm from './formRegister';
import { useHistory } from 'react-router-dom';
import  axiosClient from "../../axios/axiosClient";
function Register(props) {
    const history = useHistory();
    const handleOnSubmit = async (data, e)=>{
        e.preventDefault();
        const {username, password, confirm, email} = data;
        const response = await axiosClient.post("/auth/register",data);
        if(response.status === 200){
            history.push("/login");
        }else{
            alert("Tai khoan da ton tai");
        }
    }
    return (
        <div className=" register w-full h-full">
            <RegisterForm onSubmit={handleOnSubmit}/>
        </div>
    );
}

export default Register;