import React from 'react'
import { useNavigate } from 'react-router'

const Toolkit = () => {
    const navigate = useNavigate()

    
  return (
      <>
      <h3 onClick={()=> navigate('/safaricom')}>Safaricom+</h3>
      <h3 onClick={()=> navigate('mpesa')} >Mpesa</h3>
      </>
  )
}

export default Toolkit