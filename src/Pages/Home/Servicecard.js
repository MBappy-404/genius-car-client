import React from 'react';
import { Link } from 'react-router-dom';

const Servicecard = ({ service }) => {

     const {img, price, title, _id} = service;
     return (
          <div>
               <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img}  alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{title}!</h2>
                         <p className='text-orange-700  font-medium'>Price: ${price}</p>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">
                                   <Link to={`/checkout/${_id}`}>Buy Now</Link>
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Servicecard;