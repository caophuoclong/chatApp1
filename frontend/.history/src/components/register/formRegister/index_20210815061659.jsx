import { faKey, faUser, faUserFriends, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./formRegister.css"

function RegisterForm(props) {
    const {register, handleSubmit} = useForm();
    const {onSubmit} = props;
    return (
        <form className="form flex flex-col w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center">Dang ky</h1>
            <div className="w-full border border-gray-50">
                <input type="text" autocomplete="off" className="text-transparent w-3/4" placeholder="Username" {...register("username")}/>
                <FontAwesomeIcon className="w-1/4" icon={faUser} size="2x"/>
            </div>
            
            <Link to="/login"><h2>Ban da co tai khoan?</h2></Link>
            <button className="">Dang ky</button>
        </form>
    );
}

export default RegisterForm;