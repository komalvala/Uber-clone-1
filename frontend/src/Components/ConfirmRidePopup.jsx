import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = (props) => {

    const [otp, setOtp] = useState('');

    const sumbitHanlder = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h5
                onClick={() => {
                    props.setConfirmRidePopupPanel(false)
                }}
                className='w-[93%] p-1 text-center absolute top-0'>
                <i className="text-2xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-16 w-16 rounded-full object-cover' src="https://th.bing.com/th/id/R.a974526b0d8e713d6d10c6dbc35a5c91?rik=PxQRbin%2fOhnx2Q&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fpictures%2f18%2f06%2f29%2f00%2f35%2f0101925.jpg&ehk=CSN0w13UxlvwbfQVwIRgLcU1NDeetirwL0F0KpsbOI0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <h2 className='text-xl font-semibold'>Robert Downey Jr.</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 Km</h5>
            </div>

            <div className='flex gap-2 flex-col justify-between items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className=' text-gray-600'>Kankariya Lake, Ahmedabad</p>
                        </div>
                    </div>
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
                <div className='mt-6 w-full'>
                    <form onSubmit={(e) => {
                        sumbitHanlder(e)
                    }}>
                        <input value={otp} onChange={(e) => {
                            setOtp(e.target.value)
                        }} type="text" placeholder='Enter OTP' className='bg-[#eee] placeholder-gray-600 px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' />
                        <Link to='/captain-riding' className='w-full text-lg bg-green-600 mt-5 flex justify-center text-white font-semibold p-3 rounded-lg'>Confirm</Link>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false);
                            props.setRidePopupPanel(false);
                        }}
                            className='w-full mt-2 text-white text-lg bg-red-600 font-semibold p-3 rounded-lg'>Cancle</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopup