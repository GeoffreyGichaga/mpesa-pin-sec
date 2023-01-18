import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Container'
import '../styling/EnterNo.css'
import Col from 'react-bootstrap/Col'



const EnterNo = () => {
  return (
    <>
    <h1>Mpesa menu</h1>

      <Container>
      <Row  className='phonerow'>
        {/* NavBar */}
        <Row>
          
        </Row>








        <Row className='mpesarow'>
          <Col lg={6}>
          <h3 className='titles mt-2 mb-5'>Safaricom</h3>

          <h6 className='titles2 mt-2 mb-2'>SIM Toolkit</h6>



          <a href='/enternumber'  className='titles mt-4'>Send Money</a>
          <hr className='hr'/>
          <p className='titles mt-2'>Withdraw Cash</p>
          <hr className='hr'/>
          </Col>

          


          
        </Row>

        
        





        


        

        
       
        




      </Row>
      </Container>
    </>
  )
}

export default EnterNo