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
        <form onSubmit={handleSubmit(onSubmitForm)}   className="w-1/2 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
            <h1><i>Login Form</i></h1>
            <div className="w-3/4 flex justify-between">
                <input type="text" autocomplete="off" className="" id="username" {...register("username")}/>
                <FontAwesomeIcon icon={faUser} size="2x"/>
            </div>
            <div className="">
                <input type="password" autocomplete="off" className="" id="password" {...register("password")}/>
                <FontAwesomeIcon icon={faKey} size="2x"/>
            </div>
             <Link to="/register" className="btn-signup" ><h2>Tạo tài khoản</h2></Link>
            <button type="submit" className="btn-submit">Đăng nhập</button>
        </form>
    );
}

export default Index;