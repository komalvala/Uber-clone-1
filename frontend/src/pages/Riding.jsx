import React from 'react'
import map from '../assets/map.gif'
import { Link } from 'react-router-dom'


const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-semibold  ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src={map} alt="" />
            </div>
            <div className='h-1/2 mt-10 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-20' src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-semibold'>Tom Cruise</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>GJ27 AD 1234</h4>
                        <p className='text-gray-600'>Mercedes Benz</p>
                    </div>
                </div>

                <div className='flex gap-2 flex-col justify-between items-center'>
                    <div className='w-full mt-5'>

                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className=' text-gray-600'>Kankariya Lake, Ahmedabad</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="text-lg ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹193.20</h3>
                                <p className=' text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full bg-green-600 mt-5 text-lg text-white font-semibold p-3 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding