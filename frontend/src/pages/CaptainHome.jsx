import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import map from '../assets/map.gif'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp' 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0%)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 items-center flex justify-between w-screen'>
        <img className='w-16' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-semibold  ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src={map} alt="" />
      </div>
      <div className='h-2/5 mt-10 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  rounded-t-2xl bg-white px-3 py-10 pt-12'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome