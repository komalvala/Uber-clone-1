import React from 'react'
import { Link } from 'react-router-dom'
import map from '../assets/map.gif'


const CaptainHome = () => {
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
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-20 w-20 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.pi33jySSz5T3JS1PMbatTQHaLH?rs=1&pid=ImgDetMain" alt="" />
            <h4 className='text-lg font-medium'>Tom cruise</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹295.20</h4>
            <p className='text-sm font-medium text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 mt-8 bg-gray-200 rounded-xl justify-center gap-5 items-start'>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-medium ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-medium ri-speed-up-fill"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-medium ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome