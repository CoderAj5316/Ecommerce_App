import {React,useEffect} from "react";
import { useState } from "react";
import {NavLink, json, useNavigate,} from 'react-router-dom';
import "./Register.css";
import axios from "axios";

const ForgotPassword = () => {
    const [Email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [secAnswer,setSecAnswer]=useState("");

    const navigate=useNavigate();

   

    const collectData = async () => {

        // console.log({Email:Email,Password:newPassword,SecAns:secAnswer});
        const response = await axios.post('http://localhost:8080/forgotpassword', {
          email: Email,
          password: newPassword,
          secanswer:secAnswer
        });

        if(response.data.message==="User Not Found")
        {
            alert("User Not Found, Please Signup First");
            navigate("/register")
            return;
        }
        else if(response.data.message==="secretAnswer is Wrong")
        {
            alert("Secret Answer Incorrect,Please Enter Valid Detail");
            return;
        }
        else if(response.data.message==="update success")
        {
            alert("Password Has been change successfully");
            navigate("/login");
            return;
        }



        // console.log(Email,Password);

        // if(response.data.message=="Login Success")
        // {
        //   alert("Login Success");
        //   navigate("/home");
        //   return;
        // }
        // else if(response.data.message==="Enter Valid Email/Password")
        // {
        //   alert("Enter Valid Email/Password");
        //   return;
        // }
        // else if(response.data.message==="Not Having Existing Account,Please Signup")
        // {
        //    alert("Not Having Existing Account,Please Signup");
        //    navigate("/register");
        //    return;
        // }
        // else
        // {
        //   return;
        // }
        
      };
      
    return (
        <div className="Signup-Div">
            <h1 style={{ color: 'black', fontWeight: '700', fontFamily: 'cursive' }}>Forgot Password</h1>
            
            <input className="Input-Field" style={{height:"33px", width:"35%"}} type="text" placeholder="Enter Email : " value={Email} onChange={(e) => { setEmail(e.target.value) }} />
            <input className="Input-Field" style={{height:"33px", width:"35%"}}  type="text" placeholder="Enter Secret Answer : " value={secAnswer} onChange={(e) => { setSecAnswer(e.target.value) }} />
            <input className="Input-Field" style={{height:"33px", width:"35%"}}  type="password" placeholder="Enter New Password : " value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} />
            <button type="button" className="LogIn-Button" onClick={collectData}>update</button>
           
        </div>
    )
}

export default ForgotPassword;