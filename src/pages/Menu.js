import React from 'react'
import { useNavigate } from 'react-router'

const Menu = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>Menu</div>
    <h4 onClick={()=> navigate("/toolkit")}>Sim logos</h4>

    </>
  )
}

export default Menu