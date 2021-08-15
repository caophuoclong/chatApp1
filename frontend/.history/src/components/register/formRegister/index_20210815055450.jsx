import { faKey, faUser, faUserFriends, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function RegisterForm(props) {
    const {register, handleSubmit} = useForm();
    const {onSubmit} = props;
    return (
        <form className="register flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <h1>Dang ky</h1>
            <div className="register__input-group input-group">
                <input type="text" autocomplete="off" className="inp" placeholder="Username" {...register("username")}/>
                <FontAwesomeIcon icon={faUser} size="2x"/>
            </div>
            <div className="register__input-group input-group">
            <input type="password" autocomplete="off" className="inp" placeholder="Password" {...register("password")}/>
                <FontAwesomeIcon icon={faKey} size="2x"/>
            </div>
            <div className="register__input-group input-group">
            <input type="email" autocomplete="off" className="inp" placeholder="Email" {...register("email")}/>
                <FontAwesomeIcon icon={faVoicemail} size="2x"/>
            </div>
            <div className="register__input-group input-group">
            <input type="text" autocomplete="off" className="inp" placeholder="Full name" {...register("fullName")}/>
                <FontAwesomeIcon icon={faUserFriends} size="2x"/>
            </div>
            <Link to="/login"><h2>Ban da co tai khoan?</h2></Link>
            <button className="btn">Dang ky</button>
        </form>
    );
}

export default RegisterForm;