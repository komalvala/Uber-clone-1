import React from 'react'

const LocationSearchPanel = (props) => {


    const locations = [
        "F/4, Ishwardham flat, Daxini society, maininagar, Ahmedabad - 380008",
        "16A, lily lotus, Daxini society, maininagar, Ahmedabad - 380005",
        "20B, kapoor's cafe, Daxini society, maininagar, Ahmedabad - 380002",
        "1/A, Malholtra's cafe, Daxini society, maininagar, Ahmedabad - 380024",
        "2/B, zudio, Daxini society, maininagar, Ahmedabad - 380015",
    ]

    return (
        <div>

            {
                locations.map(function (elem,index) {
                    return <div key={index}
                        onClick={() => {
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                        }
                        }
                        className='flex gap-4 border-2 p-3 rounded-xl border-gray-100 active:border-black items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] flex items-center justify-center h-[30px] w-12 rounded-full'>
                        <i className="ri-map-pin-fill"></i></h2>
                        <h4 className='text-base font-medium'>{elem}</h4>
                </div>
                })
            }

            
        </div>

    )
}

export default LocationSearchPanel