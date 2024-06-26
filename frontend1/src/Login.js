import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { statusfun } from "./redux/statuslice";
import { ApiUrl } from "./api/apiLink";
import fb from "./images/facebook.png";
import google from "./images/googlelogo.png";
import eyeopen from "./images/eyeopen.png";
import eyeclose from "./images/eyeclose.png";

const Login = ({ senddata, sendhome}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeStatus, seteyeStatus] = useState(false);
  const [borderStatus, setBorderStatus] = useState(false);
  const [borderStatuspas, setBorderStatuspas] = useState(false);

  const status = useSelector((state) => state.status.status);
  const dispatch = useDispatch();

  const handlelogin = (e) => {
    e.preventDefault();
    if (email == "" && password == "") {
      alert("please enter email and password");
      setBorderStatus(true);
      setBorderStatuspas(true);
    } else {
      axios
        .post(`${ApiUrl}/login`, { email: email, password: password })
        .then((res) => {
          if (res.data == "Email does not exist") {
            setEmail("");
            setPassword("");
            senddata(res.data);
            setBorderStatus(true);
            setBorderStatuspas(true);
          }
          if (res.data == "Login Succesfully") {
            senddata(res.data);
            setBorderStatus(false);
            setBorderStatuspas(false);
            sendhome()
          } else if (res.data == "Password incorrect") {
            setPassword("");
            senddata(res.data);
            setBorderStatus(false);
            setBorderStatuspas(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleStatus = () => {
    dispatch(statusfun(true));
  };
  return (
    <div className={`flex box signin ${status ? "on" : "off"}`}>
      <div className="login_box">
        <h2>Sign in</h2>
        <div className="signin_btn">
          <button>
            <img src={google} /> Sign in with Google
          </button>
          <button>
            <img src={fb} /> Sign in with facebook
          </button>
        </div>

        <p>or use your account</p>
        <form style={{ position: "relative" }}>
          <input
            style={borderStatus ? { border: "solid 2px red" } : null}
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={borderStatuspas ? { border: "solid 2px red" } : null}
            type={eyeStatus ? "text" : "password"}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => seteyeStatus(!eyeStatus)}>
            <img src={eyeStatus ? eyeopen : eyeclose} width={30} />
          </span>
          <p>Forgot your password</p>
          <button style={{ backgroundColor: "red" }} onClick={handlelogin}>
            Sign In
          </button>
        </form>
      </div>

      <div
        className={`login_box2 ${status ? "transalte" : "transalteoff"}`}
        style={{ backgroundColor: "red" }}
      >
        <h2>Hello, Friend!</h2>
        <p>Enter your personal details and start journey with us</p>
        <button onClick={handleStatus}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
