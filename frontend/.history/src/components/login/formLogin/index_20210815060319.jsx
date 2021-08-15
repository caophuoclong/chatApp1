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
        <form onSubmit={handleSubmit(onSubmitForm)}   className="login" >
            <h1><i>Login Form</i></h1>
            <div className="input-group">
                <input type="text" autocomplete="off" className="input" id="username" {...register("username")}/>
                <FontAwesomeIcon icon={faUser} size="2x"/>
            </div>
            <div className="input-group">
                <input type="password" autocomplete="off" className="input" id="password" {...register("password")}/>
                <FontAwesomeIcon icon={faKey} size="2x"/>
            </div>
             <Link to="/register" className="btn-signup" ><h2>Tạo tài khoản</h2></Link>
            <button type="submit" className="btn-submit">Đăng nhập</button>
        </form>
    );
}

export default Index;