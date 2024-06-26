import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import Succesfully from './Succesfully';
import { useState } from 'react';
import Regsucess from './Regsucess';
import Home from './Home';

function App() {

  const [response,setResponse]=useState('')
  const [mariginstatus,setMariginstatus]=useState(false)
  const [regresponse,setRegresponse]=useState('')
  const [regStatus,setRegStatus]=useState(false)
  const [homeStatus,setHomeStatus]=useState(true)

  const getdata=(res)=>{
          setResponse(res)
          setMariginstatus(true)
          
          setTimeout(()=>{
           setMariginstatus(false)
          },2000)
  }

  const getreg=(res)=>{
    setRegresponse(res)
    setRegStatus(true)
  }
  const getregstatus=()=>{
         setRegStatus(false)
  }

  const gethome=()=>{
         setHomeStatus(false)
  }
return(
    
    
        <div>
          <Succesfully sendvalue={response} sendstatus={mariginstatus}/>
          <Regsucess sendreg={regStatus} sendregvalue={regresponse} regsendstatus={getregstatus}/>
          {homeStatus &&  
          <Login senddata={getdata} sendhome={gethome}/>}
          {homeStatus && <Register regstatus={getreg}/> }
          {!homeStatus && <Home />}
         
        </div>
     
     
   

      
   
)
}

export default App;
