import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useNavigate } from 'react-router'


import '../styling/toolkit.css'


import network1 from '../Assets/mobiledata.png'
import network2 from '../Assets/networksignal.png'

const Toolkit = () => {
    const navigate = useNavigate()


    const time = new Date()
    const currentTime = time.toLocaleTimeString()
    const exactTime = currentTime.slice(0,-6)

    
  return (
      <>
      <h1>Toolkit</h1>

      <Container>
      <Row  className='toolkitrow'>
        {/* NavBar */}
        <Row className='navrow'>
          <h3 className='titles mt-2 mb-5'>Safaricom</h3>


          <a href='#' className='titles mt-4'>Safaricom+</a>
          <hr className='hr'/>
          <a href='#' className='titles mt-2'>M-PESA</a>
          <hr className='hr'/>


          
        </Row>

        
        





        


        

        
       
        




      </Row>
      </Container>
      </>
  )
}

export default Toolkit