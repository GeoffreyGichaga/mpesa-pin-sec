import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'






import network1 from '../Assets/mobiledata.png'
import network2 from '../Assets/networksignal.png'




const PhoneNav = () => {

const time = new Date()
  const currentTime = time.toLocaleTimeString()
  const exactTime = currentTime.slice(0,-6)
  return (
    <>
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
    </>
  )
}

export default PhoneNav