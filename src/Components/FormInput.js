import React, { useState } from 'react'
import './formInput.css'

const FormInput = (props) => {
  const [focused,setFocused]=useState(false)
  const {id,errormessage,label,onChange,...inputProps}=props
  const blurHandler =(e)=>{
    setFocused(true)
  }
 
  return (
    <div className='form-input'>
        <label>{props.label}</label>
        <input {...inputProps} onChange={onChange} onBlur={blurHandler} focused={focused.toString()}
        onFocus={()=>inputProps.name ==="confirmpassword" && setFocused(true)}/>
        <span  >{errormessage}</span>
    </div>
  )
}

export default FormInput