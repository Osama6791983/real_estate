import React from 'react'
import { Link } from 'react-router-dom'

const Neighbor =()=>{

    const country=[
        {
            id:1,
            countryName:"Ikoyi, Lagos",
            href:"/Images/lagos.png"
        },
        {
            id:2,
            countryName: " Lagos, Nigeria",
            href:"Images/sa.png"
        },
        {
            id:3,
            countryName:"Accra, Ghana",
            href:"Images/sa.png"
        },
        {
            id:4,
            
            countryName:"Cape Town, SA",
            href:"Images/lagos.png"
        },
        {
            id:5,
            
            countryName:"Cape Town, SA",
            href:"Images/lagos.png"
        },
        {
            id:6,
            
            countryName:"Cape Town, SA",
            href:"Images/sa.png"
        },
        {
            id:7,
            
            countryName:"Cape Town, SA",
            href:"Images/lagos.png"
        },
        {
            id:8,
            
            countryName:"Cape Town, SA",
            href:"Images/sa.png"
        }
    ]
    return(
        <>
        <div className='container mx-auto '>
            <p className='text-3xl font-bold py-5 text-center'>Explore Neighbourhoods</p>
            
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6  mb-8'>
                {country.slice(0,2).map((c)=>(
                <div key={c.id} >
                    <div className='relative h-52 bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${c.href})` }}>

                        <p className='text-xl text-white px-2 pt-1 font-bold'>{c.countryName}</p>
                        
                        <Link className="absolute bottom-1 right-1 rounded-full text-sm bg-white text-gray-700 px-2 py-1">View Listing </Link>
                    
                    </div>
                    </div>
            ))}

            </div>



            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 px-12'>
                {country.slice(2).map((c)=>(
                <div key={c.id} >
                    <div className='relative h-40 bg-cover bg-center rounded-lg bg-gray-500' style={{ backgroundImage: `url(${c.href})` }}>

                        <p className='absolute inset-0 flex items-center justify-center text-xl text-white px-2 pt-1 font-bold '>{c.countryName}</p>
                        
                        <Link className="absolute bottom-1 right-1 rounded-full text-sm bg-white text-gray-700 px-2 py-1">View Listing </Link>
                    
                    </div>
                    </div>
            ))}

            </div>
        </div>
        </>
    )
}


export default Neighbor;