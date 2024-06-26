import React, { useState } from "react";
import "./regi.css";
import success from "./images/success.png";
import error from "./images/error.png";
import { UseDispatch, useDispatch } from "react-redux";
import { statusfun } from "./redux/statuslice";

const Regsucess = ({ sendreg, sendregvalue ,regsendstatus }) => {
 
const dispatch=useDispatch()
  const tryagain=()=>{
         regsendstatus()
  }

  const done=()=>{
      regsendstatus() 
      dispatch(statusfun(false) )
  }
  return (
    <div className={`regsucess ${sendreg ? "suctop0" : "suctop"}`}>
      <img src={sendregvalue == "nodata" ? error : success} width={130} />

      <div>
        <p>
          {sendregvalue == "nodata"
            ? "Please fill the require field"
            : "Thankyou username add succesfully, login and enjoy it..."}
        </p>
        <button
          onClick={sendregvalue=="nodata"?tryagain: done}
          style={sendregvalue == "nodata" ? { backgroundColor: "red" } : null}
        >
          {sendregvalue == "nodata" ? "try again" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default Regsucess;
