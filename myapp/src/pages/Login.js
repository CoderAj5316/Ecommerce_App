import {React,useEffect} from "react";
import { useState } from "react";
import {NavLink, json, useNavigate,} from 'react-router-dom';
import "./Register.css";
import axios from "axios";

const Login = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const navigate=useNavigate();

    const forgotClick=(e)=>{
      e.preventDefault();
      navigate("/forgotpassword")
      return;
    }
   

    const collectData = async () => {
        const response = await axios.post('http://localhost:8080/login', {
          email: Email,
          password: Password,
        });


        console.log(Email,Password);

        if(response.data.message=="Login Success")
        {
          alert("Login Success");
          navigate("/home");
          return;
        }
        else if(response.data.message==="Enter Valid Email/Password")
        {
          alert("Enter Valid Email/Password");
          return;
        }
        else if(response.data.message==="Not Having Existing Account,Please Signup")
        {
           alert("Not Having Existing Account,Please Signup");
           navigate("/register");
           return;
        }
        else
        {
          return;
        }
        
      };
      
    return (
        <div className="Signup-Div">
            <h1 style={{ color: 'black', fontWeight: '700', fontFamily: 'cursive' }}>Login</h1>
            
            <input className="Input-Field" style={{height:"33px", width:"35%"}} type="text" placeholder="Enter Email : " value={Email} onChange={(e) => { setEmail(e.target.value) }} />
            <input className="Input-Field" style={{height:"33px", width:"35%"}}  type="password" placeholder="Enter Password : " value={Password} onChange={(e) => { setPassword(e.target.value) }} />
            <button type="button" className="LogIn-Button" onClick={collectData}>Login</button>
            <span className="forgotBtn" onClick={forgotClick} >ForgotPassword</span>
        </div>
    )
}

export default Login;