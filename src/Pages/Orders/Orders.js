import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import OrderSummery from '../OrderSummery/OrderSummery';

const Orders = () => {

     const { user, logOut } = useContext(AuthContext);
     const [orders, setOrders] = useState([]);
     useEffect(() => {
          fetch(`https://genius-car-server-alpha-silk.vercel.app/orders?email=${user?.email}`,{

          headers: {
               authorization: `Bearer ${localStorage.getItem('genius-token')}`
          }
          })
               .then(res => {
                    if(res.status === 401 || res.status === 403){
                        return logOut()
                    }
                   return res.json()
               })
               .then(data =>{
                    setOrders(data)
               })
     }, [user?.email,logOut ])

     const handleDelete = id => {

          const proceed = window.confirm('Are You sure, want to delete order')

          if (proceed) {
               fetch(`https://genius-car-server-alpha-silk.vercel.app/orders/${id}`, {
                    method: 'DELETE',
                    
               })

                    .then(res => res.json())
                    .then(data => {
                         // console.log(data)
                         if (data.deletedCount > 0) {

                              const remaining = orders.filter(odr => odr._id !== id);
                              setOrders(remaining);


                         }

                    })
          }
     };

     const handleStatus = id => {
          fetch(`https://genius-car-server-alpha-silk.vercel.app/orders/${id}`, {
               method: 'PATCH',
               headers: {
                    'content-type': 'application/json',
          
               },
               body: JSON.stringify({ status: 'Approved' })
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                         const remaining = orders.filter(odr => odr._id !== id);
                         const approving = orders.find(odr => odr._id === id);
                         approving.status = <button className="btn btn-success btn-sm">Approved</button>

                         const newOrders = [approving, ...remaining];
                         setOrders(newOrders);
                    }
               })
     }
     return (
          <div>
               <h2 className="text-5xl">You have {orders.length} Orders</h2>
               <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                         <thead>
                              <tr>
                                   <th>
                                   </th>
                                   <th>Name</th>
                                   <th>ServiceName</th>
                                   <th>Price</th>
                                   <th></th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   orders.map(order => <OrderSummery
                                        key={order._id}
                                        order={order}
                                        handleDelete={handleDelete}
                                        handleStatus={handleStatus}
                                   ></OrderSummery>)
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Orders;