import Container from 'react-bootstrap/Container'
// import Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import '../styling/home.css'


import network1 from '../Assets/mobiledata.png'
import network2 from '../Assets/networksignal.png'

import cloudy from '../Assets/cloudy.png'

import search from '../Assets/search.png'
import googlevoice from '../Assets/googlevoice.png'


import store from '../Assets/store.png'
import gallery from '../Assets/gallery.png'
import playstore from '../Assets/playstore.png'
import sim from '../Assets/sim.png'


import camera from '../Assets/camera.png'
import message from '../Assets/message.png'
import apple from '../Assets/apple.png'
import opera from '../Assets/opera.png'


const Home = () => {
  const navigate = useNavigate()



  const time = new Date()
  const currentTime = time.toLocaleTimeString()
  const exactTime = currentTime.slice(0,-6)

  const nairobiWeather ="https://www.google.com/search?q=weather+nairobi&oq=weather+&aqs=chrome.3.69i57j35i39j0i131i433i512l3j0i131i433i457i512j69i60l2.4133j0j4&sourceid=chrome&ie=UTF-8"



  
  const openToolkit = ()=>{
    navigate('/toolkit')
  }
  

  return (
    <>
    <h1>Home page</h1>
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
        <Row className='weatherrow mt-5'>
          <div className='ms-5'>
            <img className='cloudy' src={cloudy} alt='weather'/>

          </div>

          <a href={nairobiWeather} className='weathertext ms-3'  target='blank'>Tap for weather Info</a>
        </Row>


        {/* Google Search Bar */}
        <Row>

        <div className='googlesearch d-flex mt-4 ms-3'>
          <img src={search} className='gicon mt-2 mb-2' alt='google'/>
          {/* <img src={googlevoice} className='gvoice' alt='gvoice'/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png' className='lens' alt='g'/> */}


          
          

          <div className='voicelens d-flex justify-content-center'>
            <img src={googlevoice} className='gvoice ms-2 w-25' alt='gvoice'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png' className='lens' alt='g'/>
          </div>


        </div>

          
        </Row>

        {/* Application Icons  */}
        <Row className='mt-5'>
          <div className='d-flex justify-content-start'>
            <div>
              <img src={store} className='storeicon ms-3' alt='store'/>
              <p className='apptext'>Galaxy Store</p>

            </div>

            <div>
              <img src={gallery} className='galleryicon' alt='store'/>
              <p className='apptext'>Gallery</p>

            </div>


            <div>
              <img src={playstore} className='playicon ms-3' alt='store'/>
              <p className='apptext ms-2'>Playstore</p>

            </div>



            <div onClick={openToolkit}  className='ms-2'>
              <img src={sim} className='saficon ms-4' alt='store'/>
              <p className='apptext ms-4'>Safricom</p>
            
            </div>
          </div>


        </Row>

        
        {/* Space between taskbar apps  */}

        <Row>
          <p className='dots text-center'>.  .  .</p>
        </Row>
       
        <Row>
          <div className='homeapps d-flex'>
            <div>
              <img src={apple} className='phone1' alt='phone'/>
            </div>

            <div>
              <img src={message} className='message' alt='phone'/>
            </div>
            <div>
              <img src={camera} className='camera' alt='phone'/>
            </div>
            

            <div>
              <img src={opera} className='browser' alt='phone'/>
            </div>
           

           
          </div>
        </Row>





      </Row>
      
    
    </Container>

    </>
  )
}

export default Home