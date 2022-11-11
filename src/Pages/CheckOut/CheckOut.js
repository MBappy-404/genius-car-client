import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth';

const CheckOut = () => {

     const { user } = useContext(AuthContext);
     const { title, _id, price, img } = useLoaderData();

     const handleSubmit = event => {
          event.preventDefault();

          const form = event.target;
          const name = `${form.firstName.value} ${form.lastName.value}`
          const email = user?.email || 'unregistered';
          const phone = form.phone.value;
          const message = form.message.value;

          const order = {

               service: _id,
               serviceName: title,
               price,
               customer: name,
               phone,
               email,
               message
          }

          if (phone.length < 10) {
               return alert('please valid phone number')

          }

          fetch('https://genius-car-server-alpha-silk.vercel.app/orders', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json',
                   
               },
               body: JSON.stringify(order)

          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if(data.acknowledged){
                         alert('order place successfully');
                         form.reset();
                    }
               })
               .catch(err => console.log(err))

     }

     return (
          <div>
               <div className='container'>
                    <form onSubmit={handleSubmit} className='m-10'>

                         <div className='mb-7 flex  justify-center'>
                              <div className=''>
                                   <img src={img} className='mb-5' alt="" />
                                   <h2 className='text-2xl font-semibold'>Your Order: {title}</h2>
                                   <h2 className='text-xl'>Price: ${price}</h2>
                              </div>
                         </div>

                         <div className='bg-slate-200 '>
                              <div className='grid sm:grid-cols-1 gap-4 p-10 md:grid-cols-2  '>
                                   <input name='firstName' type="text" placeholder="First name here" className="input input-bordered input-primary w-full" required />
                                   <input name='lastName' type="text" placeholder="Last name here" className="input input-bordered input-primary w-full" />
                                   <input name='phone' type="text" placeholder="Your phone here" className="input input-bordered input-primary w-full" required />
                                   <input name=' email' type="text" placeholder="Your email here" readOnly defaultValue={user?.email} className="input input-bordered input-primary w-full" />

                              </div>

                              <div className='mx-10'>
                                   <textarea name='message' className="textarea textarea-primary w-full" placeholder="Your Message"></textarea>
                              </div>

                              <div className='text-center p-5'>
                                   <input type="submit" className='btn btn-secondary ' value='place your order' id="" />
                              </div>

                         </div>


                    </form>
               </div>
          </div>
     );
};

export default CheckOut;