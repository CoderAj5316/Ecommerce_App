import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [SecAnswer, setSecAnswer] = useState("");
  const [Address, setAddress] = useState("");

  const navigate = useNavigate();

  const collectData = async (e) => {
    e.preventDefault();
    // console.log(Name, Email, Password, Phone, SecAnswer, Address);
    const response = await axios.post("http://localhost:8080/register", {
      name: Name,
      email: Email,
      password: Password,
      phone: Phone,
      secanswer: SecAnswer,
      address: Address
    });

    if(response.data.message==="Please Fill All Fields!")
    {
        alert("Registration Failed,Please Enter All Fields");
        return;
    }
        
    if(response.data.message==="Already User Have an Account, Please Login")
    {
        alert("Already User Have an Account, Please Login");
        navigate("/login");
        return;
    }
    if (response.status === 200) {

        alert("Registration Success");
        navigate("/login");
    } 
  };

  return (
    <div className="Signup-Div">
      <h1 style={{ color: "black", fontWeight: "700", fontFamily: "cursive" }}>Register</h1>
      <input
        className="Input-Field"
        type="text"
        placeholder="Enter Name : "
        value={Name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="Input-Field"
        type="text"
        placeholder="Enter Email : "
        value={Email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="Input-Field"
        type="password"
        placeholder="Enter Password : "
        value={Password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        className="Input-Field"
        type="text"
        placeholder="Enter Phone : "
        value={Phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        className="Input-Field"
        type="text"
        placeholder="Enter SecretAnswer"
        value={SecAnswer}
        onChange={(e) => {
          setSecAnswer(e.target.value);
        }}
      />
      <input
        className="Input-Field"
        type="text"
        placeholder="Enter Address"
        value={Address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <button type="button" className="SignUp-Button" onClick={collectData}>
        SignUp
      </button>
    </div>
  );
};

export default Register;
