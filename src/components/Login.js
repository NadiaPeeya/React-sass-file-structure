import React from 'react';
import '../styles/Login.scss';
import Header from './Header';

const Login = () => {

    return (
        <div>
<Header></Header>
        <div className='forms'>
        <form action="" className='form'>
            <label htmlFor="">email</label>
            <input type="text" name="" id="" placeholder='email'/>
            <label htmlFor="">password</label>
            <input type="password" name="" id="" placeholder='password'/>
            <button type='submit'>Next</button>
        </form>
    </div>
        </div>
        
    );
};

export default Login;