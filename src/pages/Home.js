import Container from 'react-bootstrap/Container'
import React from 'react'
import Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styling/home.css'


import network1 from '../Assets/mobiledata.png'
import network2 from '../Assets/networksignal.png'





const Home = () => {
  const navigate = useNavigate()


  const time = new Date()
   const currentTime = time.toLocaleTimeString()
   const exactTime = currentTime.slice(0,-6)


  

  return (
    <>
    <h1>Home page</h1>
    {/* <h3 onClick={()=> navigate('/menu')} >menu</h3> */}
    <Container className='cont'>
      <Row  className='phonerow'>
        {/* NavBar */}
        <Row>
          <div className='nav d-flex justify-content-between'>
            {/* Time */}
          
            <p className='time ps-1'>{exactTime}</p>
          
            <div>
            <img className='net1' src={network1} alt='net'/>
            <img className='net2' src={network2} alt='net2'/>
            </div>

  
          </div>
        </Row>



        

        {/* Weather Icon  */}
        <Row>

        </Row>





      </Row>
      
    
    </Container>

    </>
  )
}

export default Home