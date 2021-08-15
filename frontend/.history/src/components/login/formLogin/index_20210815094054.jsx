import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Index(props) {
    const {register, handleSubmit} = useForm();
    const {onSubmitForm} = props;
    return (
        <form onSubmit={handleSubmit(onSubmitForm)}   className="w-1/3 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
            <h1 className="text-3xl font-extrabold my-4"><i>Login Form</i></h1>
            <div className="w-3/4 flex justify-between ring-2 ring-purple-600 items-center py-2 rounded-full">
                <input type="text" autocomplete="off" className="w-full outline-none pl-4 text-2xl text-black font-bold bg-transparent" id="username" {...register("username")}/>
                <FontAwesomeIcon icon={faUser} className="text-2xl mx-4"/>
            </div>
            <div className="w-3/4 flex justify-between ring-2 ring-purple-600 items-center py-2 rounded-full my-4">
                <input type="password" autocomplete="off" className="w-full outline-none pl-4 text-2xl text-black font-bold bg-transparent" id="password" {...register("password")}/>
                <FontAwesomeIcon icon={faUser} className="text-2xl mx-4"/>
            </div>
             <Link to="/register" className="btn-signup" ><h2 className="text-2xl font-medium text-blue-500">Tạo tài khoản</h2></Link>
            <button type="submit" className="w-4/5 bg-blue-500 hover:bg-blue-300 h-12 rounded-full ">Đăng nhập</button>
        </form>
    );
}

export default Index;