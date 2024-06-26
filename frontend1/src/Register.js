import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { statusfun } from "./redux/statuslice";
import { ApiUrl } from "./api/apiLink";
import { emailcheck } from "./Function/check";
import eyeopen from "./images/eyeopen.png";
import eyeclose from "./images/eyeclose.png";

const Register = ({ regstatus }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeStatus, seteyeStatus] = useState(false);
  const [userStatus, setUserStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [validstatus, setValidstatus] = useState(false);

  const [userst, setUserst] = useState(false);
  const [emailst, setemailst] = useState(false);
  const [passwordst, setpasswordt] = useState(false);

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username == "" || email == "" || password == "") {
      if (username == "" && email == "" && password == "") {
        regstatus("nodata");
        setEmailStatus(true);
        setPasswordStatus(true);
        setUserStatus(true);
      } else if (username == "" && email == "") {
        regstatus("nodata");
        setEmailStatus(true);
        setPasswordStatus(false);
        setUserStatus(true);
      } else if (username == "" && password == "") {
        regstatus("nodata");
        setEmailStatus(false);
        setPasswordStatus(true);
        setUserStatus(true);
      } else if (password == "" && email == "") {
        regstatus("nodata");
        setEmailStatus(true);
        setPasswordStatus(true);
        setUserStatus(false);
      }
    } 
    else if (!emailcheck(email)) {
      setValidstatus(true);
      setEmailStatus(true);
      setPasswordStatus(false);
      setUserStatus(false);
    } else if (emailcheck(email)) {
      setValidstatus(false);
      setEmailStatus(false);
      setPasswordStatus(false);
      setUserStatus(false);
    }

    if (email && username && password) {
      axios
        .post(`${ApiUrl}/register`, {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          regstatus("data");
          setUsername("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleStatus = () => {
    dispatch(statusfun(false));
  };
  return (
    <div className="flex box signup">
      <div className="login_box2">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <button onClick={handleStatus}>Sign in</button>
      </div>
      <div className="login_box">
        <h2>Create Account</h2>
        <p>or use your email for registration</p>
        <form style={{ position: "relative" }}>
          <input
            style={userStatus ? { border: "solid 2px red" } : null}
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            style={emailStatus ? { border: "solid 2px red" } : null}
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {validstatus && <p className="invalid">Invalid Email</p>}
          <input
            style={passwordStatus ? { border: "solid 2px red" } : null}
            type={eyeStatus ? "text" : "password"}
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye" onClick={() => seteyeStatus(!eyeStatus)}>
            <img src={eyeStatus ? eyeopen : eyeclose} width={30} />
          </span>
          <button onClick={handleRegister}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
