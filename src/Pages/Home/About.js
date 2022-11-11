import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
     return (
          <div>
               <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                         <div className='w-1/2 relative'>
                              <img src={person} className="max-w-sm w-4/5 rounded-lg shadow-2xl" />
                              <img src={parts} className="max-w-sm w-3/5 top-1/2 border-8 shadow-2xl right-8 rounded-lg absolute shadow-2xl" />
                         </div>
                         <div className='w-1/2'>
                              <p className='text-orange-600 mb-5 text-3xl font-bold'>About Us</p>
                              <h1 className="text-5xl font-bold">We Are Qualified &<br />
                                   Of experience <br />
                                   in this Field

                              </h1>
                              <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                              <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                              <button className="btn btn-primary">Get Started</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;