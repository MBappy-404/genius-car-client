import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const OrderSummery = ({ order,handleDelete,handleStatus }) => {

     const { _id,serviceName, phone, price, service, customer, status } = order;

     const [orderService, storeOrderService] = useState([])
     useEffect(() => {

          fetch(`https://genius-car-server-alpha-silk.vercel.app/services/${service}`)
               .then(res => res.json())
               .then(data => storeOrderService(data))


     }, [service]);

   
     return (

          <tr>
               <th>
                    <label>
                         <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-outline">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                         </button>

                    </label>
               </th>
               <td>
                    <div className="flex items-center space-x-3">
                         <div className="avatar ">
                              <div className="mask rounded  w-24 h-24">
                                   {
                                        orderService?.img &&
                                        <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                                   }
                              </div>
                         </div>
                         <div>
                              <div className="font-bold">{customer}</div>
                              <div className="text-sm opacity-50">{phone}</div>
                         </div>
                    </div>
               </td>
               <td>
                    <p>{serviceName}</p>
               </td>
               <td>${price}</td>
               <th>
                    <button onClick={() => handleStatus(_id)} className="btn btn-ghost btn-sm">{status ? status : <button className="btn btn-sm btn-secondary">PENDING..</button>}</button>
               </th>
          </tr>

     );
};

export default OrderSummery;