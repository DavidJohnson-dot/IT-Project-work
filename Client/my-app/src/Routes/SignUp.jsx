import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-screen bg-gray-100 '>
            <section className='border-[1px]  bg-white border-stone-300 shadow-2xl flex items-center flex-col h-[480px] lg:flex-row gap-2 h-[420px]'>
                <div className='w-[220px]  h-[60px]  lg:h-full'>
                    <img src='../images/welcome.jpg' className='h-full w-full object-cover object-center' alt='sign'></img>
                </div>
                <form>
                    <div className=' flex flex-col gap-2 w-[300px]'>
                        <h4 className='mx-auto text-sm font-medium'>SCM SOLUTIONS.</h4>
                        <div className='font-bold text-gray-600 w-[73%] mx-auto'>Welcome to our supply chain solutions.</div>
                    
                    <input type='text' placeholder='Company Name' className='border-2 border-gray-400 rounded-sm w-[73%] mx-auto h-[35px]'></input>
                    
                    <input type='email' placeholder='Enter email' className='border-2 border-gray-400 rounded-sm w-[73%] mx-auto h-[35px]'></input>
                    <input type='password' placeholder='Confirm Password' className='border-2 border-gray-400 rounded-sm w-[73%] mx-auto h-[35px]'></input>
    
                    <input type='password' placeholder='Password' className='border-2 border-gray-400 rounded-sm w-[73%] mx-auto h-[35px]'></input>
                    <div className='flex w-[73%] justify-between mx-auto'>
                        <section className="h-[35px] w-[47%] flex gap-1 pl-1 items-center border-2 border-gray-400 rounded-sm ">
                        <input type='radio' name='select' id="Personal" value={"individual"} ></input>
                        <label for="Personal" className='font-medium text-gray-600'>Personal</label>
                        </section>
                        <section className="h-[35px] w-[47%] flex gap-1 pl-1 items-center border-2 border-gray-400 rounded-sm ">
                        <input type='radio' name='select' id="Bus" value={"Business"} ></input>
                        <label for="Bus" className='font-medium text-gray-600'>Business</label>
                        </section>
                       
                    </div>
                    <input type='button' value={"Sign Up"} className="h-[35px] bg-green-400 w-[73%] text-white font-medium mx-auto"></input>
                    <div className='w-[73%] mx-auto'>Already signed up? <Link to={"/Login"} className='text-blue-500 font-medium hover:underline decoration-2'>Login</Link></div>
                    </div>
                </form>
            </section>
        </div>
    </div>
  )
}

export default SignUp