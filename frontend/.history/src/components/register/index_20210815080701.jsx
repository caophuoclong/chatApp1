import React from 'react';
import RegisterForm from './formRegister';
import axios from "axios";
import { useHistory } from 'react-router-dom';
function Register(props) {
    const history = useHistory();
    const handleOnSubmit = async (data, e)=>{
        e.preventDefault();
        alert(data);
    }
    return (
        <div className=" register w-full h-full">
            <RegisterForm onSubmit={handleOnSubmit}/>
        </div>
    );
}

export default Register;