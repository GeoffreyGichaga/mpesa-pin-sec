import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Alert from 'react-bootstrap/Alert'

import Error from '../components/Error'






const SafMenu = () => {
    const [error,setError] = useState(false)

  
  return (
    <>
      <h1>Safmenu</h1>
      <Error showError={error}/>

      <Container>
      <Row  className='toolkitrow'>
        {/* NavBar */}
        <Row className='navrow'>
          <h3 className='titles mt-2 mb-5'>Safaricom</h3>


          <a href='#' onClick={()=>setError(true) } className='titles mt-4'>M-Banking Services</a>
          <hr className='hr'/>
          <a href='#' onClick={()=>setError(true) } className='titles mt-2'>My Account</a>
          <hr className='hr'/>


          
        </Row>

        
        





        


        

        
       
        




      </Row>
      </Container>
      </>
  )
}

export default SafMenu