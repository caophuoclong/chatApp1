import React from 'react';
import RegisterForm from './formRegister';
import { useHistory } from 'react-router-dom';
import  axiosClient from "../../axios/axiosClient";
function Register(props) {
    const history = useHistory();
    const handleOnSubmit = async (data, e)=>{
        e.preventDefault();
        const {username, password, confirm, email} = data;
        const response = await axiosClient.post("/auth/register",data).catch(error =>{
            if(error){
                alert("Tai khoan da ton tai");
            throw error;
            }
            else{
                history.push("/login");
            }
        });
        
    }
    return (
        <div className=" register w-full h-full">
            <RegisterForm onSubmit={handleOnSubmit}/>
        </div>
    );
}

export default Register;