import React from 'react'

const Box = (props) => {
  return (
    <div style={{border:"1px solid black", fontSize:"70px" , padding:"5px 25px", minWidth:"81px",minHeight:"81px" ,textAlign:"center"}} onClick={props.onClick}>
      {props.value}
    </div>
  )
}

export default Box
