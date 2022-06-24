import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function Login()
{
    const { register,handleSubmit,formState:{errors}}=useForm();
    const onFormSubmit=(userData)=>{
        console.log(userData)
    }
    const navigate=useNavigate()
    return(
        <div id="re">
        <div className='container-fluid'>
            <div className='row'>
            <div className="col-11 col-sm-8 col-md-4 mx-auto mt-5 mb-4">
                <form className='border p-4 bg-secondary bg-opacity-50 shadow' onSubmit={handleSubmit(onFormSubmit)}>
                  <div className='mb-3'>
                  <p className='display-5 '>Login</p>
                  </div>
                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="un"><em>Username</em></label>
                        <input type="text" id="un" className="form-control" {...register("username", { required: true, minLength: 6 ,maxLength:10})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 6</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password"><em>Password</em></label>
                        <input type="password" id="password" className="form-control" {...register("password", { required: true,maxLength:4, maxLength:8 })} />
                        {/* validation error msg for password */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Password required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 8</p>}
                    </div>
                    {/* login button */}
                    <div className='mb-1 text-center'>
                    <button type="submit" className="btn btn-success w-50 mb-1">Login</button>                      
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6 text-end mt-2'>
                        <p>New User? </p>
                        </div>
                        <div className='col-6 text-start'>
                        <button type="submit" className="btn btn-success"  onClick={()=>navigate('/Registration')}>SignUp</button>                          
                        
                        </div>
                        
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Login;

// import React from 'react';
// import { Route,Routes,useNavigate,NavLink } from 'react-router-dom';
// import SignUp from './SignUp';
// function Login() {
//     const navigate = useNavigate();

//     return (
//       <div className='mt-5'>
//         <form className='mx-auto w-25 p-3 shadow'>
//           <div>
//             <label htmlFor='un' className='m-1'>Username:</label>
//             <input type="text" id="un" className='form-control'/>
//           </div>
//           <div>
//             <label htmlFor='pw'className='m-1' >Password:</label>
//             <input type="password" id="pw" className='form-control'/>
//           </div>
  
          
//           <div className='text-center'>
//             <button type="submit" className="btn btn-info m-3" id="sbt">Log In</button>
//           </div>
//           <div className='text-center'>
//               <label htmlFor='sgnup'className='m-1' >New User?</label>
//           </div>
//           <div className='text-center'>
//           <NavLink to="/SignUp"><button type="submit" className="btn btn-primary m-1" id="sgnup">Sign Up</button></NavLink>
            
//           </div>
//         </form>
  
        
  
//       </div>
//     );
//   }
// export default Login;