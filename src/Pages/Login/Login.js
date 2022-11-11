import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/Auth';

const Login = () => {

     const { login } = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();

     const from = location.state?.from?.pathname || '/';

     const handleSignIn = event => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          login(email, password)
               .then(result => {
                    const user = result.user;
                    // console.log(user);
                    form.reset();

                    const currentUser = {
                         email: user.email
                    }

                    console.log(currentUser);

                    // jwt token
                    fetch('https://genius-car-server-alpha-silk.vercel.app/jwt', {
                         method: 'POST',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(currentUser)
                    })
                         .then(res => res.json())
                         .then(data => {

                              console.log(data);
                              localStorage.setItem('genius-token', data.token)
                         })
                        navigate(from, { replace: true });
               })
               .catch(error => console.log(error));
     }
     return (
          <div>
               <div className="hero min-h-screen  ">
                    <div className="hero-content gap-20 grid grid-cols-2 ">
                         <div className="text-center lg:text-left">
                              <img src={image} className='w-80' alt="" />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm border-4 shadow-2xl bg-base-100">
                              <h1 className="text-4xl text-center font-bold mt-5">Log in !</h1>
                              <form onSubmit={handleSignIn} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                        <label className="label gap-4">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                             <a href="#" className="label-text-alt font-semibold link link-hover">New to  car doctor? <Link className=' text-primary' to='/signup'>sign up</Link> </a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <input type="submit" value='Sign Up' className="btn btn-primary" />
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;