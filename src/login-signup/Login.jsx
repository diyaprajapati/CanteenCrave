import React from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div>
        <div>
            {/* Label */}
            <h1>Log-In</h1>

            {/* email */}
            <div>
                <label>E-mail:</label>
                <input type='email' placeholder='xyz@gmail.com'/>
            </div>

            {/* password */}
            <div>
                <label>Password:</label>
                <input type='password' placeholder='password'/>
            </div>

            {/* Button */}
            <div>
                <button>Log-in</button>
            </div>

            {/* signup if doesn't login */}
            {/* <div>
                <p>Doesn't have an account?</p>
                <Link to={/signup}>Signup</Link>
            </div> */}
        </div>
    </div>
  )
}
