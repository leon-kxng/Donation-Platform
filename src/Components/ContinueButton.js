import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContinueButton() {
    const navigate = useNavigate()
    function handleContinueButton(){
        navigate ('/boking form')
    }
  return (
    <button onClick={handleContinueButton}> Continue</button>
  )
}

export default ContinueButton;