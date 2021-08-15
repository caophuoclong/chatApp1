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
        <form className="form flex flex-col items-center w-1/2 p-9 bg-white rounded-3xl" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-3xl font-extrabold">Dang ky</h1>
            <div className="w-2/3 border border-gray-800 flex justify-between items-center rounded-full ring-2 ring-purple-600 my-4">
                <input type="text" autocomplete="off" className="w-full outline-none pl-4 pr-2 text-2xl font-bold bg-transparent   focus:border-transparent" placeholder="Username" {...register("username")}/>
                <FontAwesomeIcon className="w-auto mx-4 text-2xl" icon={faUser}/>
            </div>
            <div className="w-2/3 border border-gray-800 flex justify-between items-center rounded-full ring-2 ring-purple-600 my-4">
                <input type="text" autocomplete="off" className="w-full outline-none pl-4 pr-2 text-2xl font-bold bg-transparent   focus:border-transparent" placeholder="Mat Khau" {...register("password")}/>
                <FontAwesomeIcon className="w-auto mx-4 text-2xl" icon={faUser}/>
            </div>
            <div className="w-2/3 border border-gray-800 flex justify-between items-center rounded-full ring-2 ring-purple-600 my-4">
                <input type="text" autocomplete="off" className="w-full outline-none pl-4 pr-2 text-2xl font-bold bg-transparent   focus:border-transparent" placeholder="Nhap lai mat khau" {...register("retypePassword")}/>
                <FontAwesomeIcon className="w-auto mx-4 text-2xl" icon={faUser}/>
            </div>
            <div className="w-2/3 border border-gray-800 flex justify-between items-center rounded-full ring-2 ring-purple-600 my-4">
                <input type="text" autocomplete="off" className="w-full outline-none pl-4 pr-2 text-2xl font-bold bg-transparent   focus:border-transparent" placeholder="Email" {...register("email")}/>
                <FontAwesomeIcon className="w-auto mx-4 text-2xl" icon={faUser}/>
            </div>
            
            <Link to="/login"><h2 className="text-2xl font-bold text-blue-500">Ban da co tai khoan?</h2></Link>
            <button className="w-3/4 h-12 bg-blue-700 my-4 rounded-full text-white text-2xl font-bold hover:bg-blue-300">Dang ky</button>
        </form>
    );
}

export default RegisterForm;