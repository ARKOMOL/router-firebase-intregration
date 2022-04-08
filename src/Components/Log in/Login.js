import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase({})
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInWithGoogle} className='btn btn-primary mb-2'>Google Sign In</button>
            <form action="">
            <input type="email" placeholder='Your email' name=""  />
           <br /> <input type="password" placeholder='Your password' name=""  />
            <br /><input type="submit" value='login' name="" />
           </form>
        </div>
    );
};

export default Login;