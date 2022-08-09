import React from "react"
import './Login.css'

const Login = () => {
return(
    <>
    <div>
       <form>
        <input 
            type='text' 
            name='userid' 
            placeholder='Enter your User ID'
            className="user_style"
        />
        <input 
            type='password' 
            name='password' 
            placeholder='Enter your password'
            className="password_style"
        />
        <button 
            type="Submit"
            className="login_style"
        >
            Login
        </button>
       </form>
    </div>
    </>
)
}
export default Login;