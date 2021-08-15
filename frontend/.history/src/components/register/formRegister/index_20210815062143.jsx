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
        <form className="form flex flex-col items-center w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center">Dang ky</h1>
            <div className="w-2/3 border border-gray-800 flex justify-between items-center rounded-full">
                <input type="text" autocomplete="off" className="w-5/6 outline-none px-4 text-2xl font-bold bg-transparent" placeholder="Username" {...register("username")}/>
                <FontAwesomeIcon className="w-auto mx-4 text-2xl" icon={faUser}/>
            </div>
            
            <Link to="/login"><h2>Ban da co tai khoan?</h2></Link>
            <button className="">Dang ky</button>
        </form>
    );
}

export default RegisterForm;