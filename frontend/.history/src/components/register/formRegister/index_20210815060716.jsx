import { faKey, faUser, faUserFriends, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function RegisterForm(props) {
    const {register, handleSubmit} = useForm();
    const {onSubmit} = props;
    return (
        <form className="flex flex-col items-center fixed top-2/4" onSubmit={handleSubmit(onSubmit)}>
            <h1>Dang ky</h1>
            <div className="">
                <input type="text" autocomplete="off" className="" placeholder="Username" {...register("username")}/>
                <FontAwesomeIcon icon={faUser} size="2x"/>
            </div>
            <div className="">
            <input type="password" autocomplete="off" className="" placeholder="Password" {...register("password")}/>
                <FontAwesomeIcon icon={faKey} size="2x"/>
            </div>
            <div className="">
            <input type="email" autocomplete="off" className="" placeholder="Email" {...register("email")}/>
                <FontAwesomeIcon icon={faVoicemail} size="2x"/>
            </div>
            <div className="">
            <input type="text" autocomplete="off" className="" placeholder="Full name" {...register("fullName")}/>
                <FontAwesomeIcon icon={faUserFriends} size="2x"/>
            </div>
            <Link to="/login"><h2>Ban da co tai khoan?</h2></Link>
            <button className="">Dang ky</button>
        </form>
    );
}

export default RegisterForm;