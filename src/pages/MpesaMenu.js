import React, {useState} from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Alert from 'react-bootstrap/Alert'
import '../styling/mpesamenu.css'

import Error from '../components/Error'
const MpesaMenu = () => {
    const [error,setError] = useState(false)

  return (
    <>
      <h1>Mpesa menu</h1>
      <Error showError={error}/>

      <Container>
      <Row  className='toolkitrow'>
        {/* NavBar */}
        <Row className='navrow'>
          <h3 className='titles mt-2 mb-5'>Safaricom</h3>

          <h6 className='titles2 mt-2 mb-2'>SIM Toolkit</h6>



          <a href='#' onClick={()=>setError(true) } className='titles mt-4'>Send Money</a>
          <hr className='hr'/>
          <a href='#' onClick={()=>setError(true) } className='titles mt-2'>Widraw Cash</a>
          <hr className='hr'/>


          
        </Row>

        
        





        


        

        
       
        




      </Row>
      </Container>
      </>
  )
}

export default MpesaMenu