import './App.css';
import  './index.css';
import React from 'react'
import {useForm} from 'react-hook-form'

function regist()
{
    const { register,handleSubmit,formState:{errors}}=useForm();
    const onFormSubmit=(userData)=>{
        console.log(userData)
    }
    return(
        <div id="reg">
        <div className='row'>
            <div className="container col-11 col-sm-8 col-md-5 mx-auto mt-5 mb-4">
                <form className='border p-4' onSubmit={handleSubmit(onFormSubmit)}>
                  <div className='mb-3'>
                  <p className='display-5'>User Registration Form</p>
                  </div>

                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="un"><em>Name</em></label>
                        <input type="text" id="un" className="form-control" {...register("username", { required: true, minLength: 6 ,maxLength:10})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 6</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email"><em>Email</em></label>
                        <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
                        {/* validation error msg for email */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    </div>
                    {/* mobile number */}
                    <div className="mb-3">
                        <label htmlFor="tel"><em>Mobilenumber</em></label>
                        <input type="tel" id="tel" className="form-control" {...register("number", { required: true })} />
                        {/* validation error msg for number */}
                        {errors.number?.type === 'required' && <p className='text-danger'>* Mobilenumber required</p>}
                    </div>
            
                    {/* select educational qualification*/}
                    <div className="mb-3">
                        <label htmlFor="education"><em>Educational Qualification</em></label>
                        <select id="education" className="form-select" {...register("education", { required: true })} defaultValue={'--select--'}>
                        <option value="choose">--select--</option>
                            <option value="choose">8th standard</option>
                            <option value="choose">9th standard</option>
                            <option value="choose">10th standard</option>
                            <option value="choose">11th standard</option>
                            <option value="choose">12th standard</option>
                            <option value="choose">Graduation(B.Tech,BE,MBA)</option>
                        </select>
                        {/* validation error msg for educational qualification*/}
                        {errors.education?.type === 'required' && <p className='text-danger'>* Educational Qualification is required</p>}
                    </div>
                
                    {/* select domain*/}
                    <div className="mb-3">
                        <label htmlFor="domain"><em>Select your interested Domain</em></label>
                        <select id="domain" className="form-select" {...register("domain", { required: true })} defaultValue={'--select--'}>
                        <option value="choose">--select--</option>
                            <option value="ml">Machine Learning</option>
                            <option value="ai">Artificial Intelligence</option>
                            <option value="iot">Internet of Things</option>
                            <option value="es">Embedded Systems</option>
                            <option value="vlsi">Very Large Scale Integration</option>
                        </select>
                        {/* validation error msg for domain*/}
                        {errors.domain?.type === 'required' && <p className='text-danger'>* Domain is required</p>}
                    </div>
              
                
                    {/* select */}
                    <div className="mb-3">
                        <label htmlFor="courses"><em>Is your selected course related to your academics?</em></label>
                        <select id="courses" className="form-select" {...register("courses", { required: true })} defaultValue={'--select--'}>
                        <option value="choose">--select--</option>
                            <option value="y">Yes</option>
                            <option value="n">No</option>
                        </select>
                        {/* validation error msg for domain*/}
                        {errors.courses?.type === 'required' && <p className='text-danger'>* required</p>}
                    </div>
                
                    {/* select graduation year*/}
                    <div className="mb-3">
                        <label htmlFor="graduation"><em>Graduation Year</em></label>
                        <select id="graduation" className="form-select" {...register("graduation", { required: true })} defaultValue={'--select--'}>
                        <option value="choose">--select--</option>
                            <option value="choose">Before 2019</option>
                            <option value="choose">2019</option>
                            <option value="choose">2020</option>
                            <option value="choose">2021</option>
                            <option value="choose">2022</option>
                            <option value="choose">After 2022</option>
                        </select>
                        {/* validation error msg for educational qualification*/}
                        {errors.graduation?.type === 'required' && <p className='text-danger'>* Graduation Year required</p>}
                    </div>
                
              
                    {/* enter gpa*/}
                    <div className="mb-3">
                    <label htmlFor="point"><em>Enter your GPA</em></label>
                        <input type="point" id="point" className="form-control" {...register("number", { required: true })} />
                        {/* validation error msg for gpa */}
                        {errors.number?.type === 'required' && <p className='text-danger'>* GPA required</p>}                        
                    </div>
                
                    {/* submit button */}
                    <div className='mb-1 text-center'>
                    <button type="submit" className="btn btn-success w-50 mb-1">Submit</button>                      
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default regist;

