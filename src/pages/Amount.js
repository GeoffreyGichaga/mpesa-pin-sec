import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'

import '../styling/mpesamenu.css'
import dots from "../Assets/dots.png"
import '../styling/EnterNo.css'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'


const Amount = () => {

  return (
    <>
      <h1>Mpesa menu</h1>

      <Container>
      <Row  className='toolkitrow'>
        {/* NavBar */}

        <Row>
          <Col className='d-flex justify-content-start'>
            <h3 className='titles mt-2 mb-5'>Safaricom</h3>
          </Col>

        

        
        </Row>


        <Row className='mpesarow2'>
          <p className='enter-title text-center'>Enter Amount</p>
          <Form.Label className='digits-title' htmlFor="basic-url">Digits(0-9,*,#,+) 10 - 13</Form.Label>
          <InputGroup className="mb-3">
          
            <Form.Control id="input-space" type='number' aria-describedby="basic-addon3" />
          </InputGroup> 
          <div className='d-flex justify-content-center'>
            <Button id='ok-btn'>OK</Button>
          </div>
            




       
        </Row>

        

      </Row>
      </Container>
      </>
  )
}

export default Amount