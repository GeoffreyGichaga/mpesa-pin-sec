import React from 'react'
import Alert from 'react-bootstrap/Alert'



const Error = ({showError}) => {

  return (
    
<Alert variant="danger" show={showError} dismissible>
    <Alert.Heading>Oh snap! This page is still under development!</Alert.Heading>
    <p>Please go back to the Mpesa Menu</p>


</Alert>

    
  )
}

export default Error