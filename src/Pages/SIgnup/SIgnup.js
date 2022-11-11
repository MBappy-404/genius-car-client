import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/Auth';

const SIgnup = () => {
     const { createUser } = useContext(AuthContext);
     const navigate = useNavigate();


     const handleSignup = event => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    navigate('/home')
               })
               .catch(err => console.error(err));


     }
     return (
          <div>
               <div className="hero min-h-screen  ">
                    <div className="hero-content gap-20 grid grid-cols-2 ">
                         <div className="text-center lg:text-left">
                              <img src={login} className='w-80' alt="" />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm border-4 shadow-2xl bg-base-100">
                              <h1 className="text-4xl text-center font-bold mt-5">Sign Up !</h1>
                              <form onSubmit={handleSignup} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                        <label className="label gap-4">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                             <a href="#" className="label-text-alt font-semibold link  link-hover">Already have account? <Link className='text-primary' to='/login'>Log in</Link> </a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <input type="submit" value='Login' className="btn btn-primary" />
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SIgnup;