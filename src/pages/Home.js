import Container from 'react-bootstrap/Container'
import React from 'react'
import Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styling/home.css'
const Home = () => {
  const navigate = useNavigate()

  

  return (
    <>
    <h1>Home page</h1>
    {/* <h3 onClick={()=> navigate('/menu')} >menu</h3> */}
    <Container className='d-flex justify-content-center'>
      <Row>
        <Col className='phone'>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>

        
        </Col>
      </Row>

    </Container>

    </>
  )
}

export default Home