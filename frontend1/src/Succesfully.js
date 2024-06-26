import React from 'react'

const Succesfully = ({sendvalue,sendstatus}) => {
  return (
    <div className='succefully_box'>
        <p style={sendvalue=="Login Succesfully"?{backgroundColor:"green"}:{backgroundColor:"red"}}
            className={sendstatus ? "top0":"top1"}>{sendvalue}</p>
    </div>
  )
}

export default Succesfully