import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Servicecard from './Servicecard';

const Services = () => {

     const [services, setServices] = useState([]);
     useEffect(()=>{

          fetch('https://genius-car-server-alpha-silk.vercel.app/services')
          .then(res => res.json())
          .then(data => setServices(data))

     },[]);
     return (
          <div>
               <div className='text-center mb-10'>
               <p className='text-orange-600   mb-5 text-xl font-bold'>Services</p>
               <p className='text-black   mb-5 text-5xl font-bold'>Our Service Area</p>
               <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
               </div>

               <div className=' grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>


               {
                    services.map(service => <Servicecard
                        key={service._id}
                        service={service}
                    ></Servicecard>)
                }
               
               
               </div>
          </div>
          
     );
};

export default Services;