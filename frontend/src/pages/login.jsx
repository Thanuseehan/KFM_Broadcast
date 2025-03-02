import React, { useState } from 'react'
import { assets } from '../assets/assets';
import Navbar from '../context/Navbar'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';  // ✅ Import the context


const Login = () => {
    
    const navigate = useNavigate();

    const { backendUrl, setIsLoggedin } = useContext(AppContext);  // ✅ Get the backend URL from context

    const [state, setState] = useState('Sign up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)  // 🔹 State for password visibility

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-400 to-red-600 '>
      
      <Navbar />

      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>
           {state === 'Sign up' ? 'Create Account' : 'Login'} 
        </h2>
        <p className='text-center text-sm mb-6'>
          {state === 'Sign up' ? 'Create your account' : 'Login to your account!'}
        </p>

        <form onSubmit={onsubithandler} >
          {state === 'Sign up' && (
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] border border-gray-300'>
              <img src={assets.person_icon} alt=""/>
              <input 
                onChange={e=>setName(e.target.value)} 
                value={name}
                className='bg-transparent outline-none' 
                type="text" 
                placeholder="Full Name" 
                required
              />
            </div>
          )}

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] border border-gray-300'>
            <img src={assets.mail_icon} alt=""/>
            <input 
              onChange={e =>setEmail(e.target.value)} 
              value={email}
              className='bg-transparent outline-none' 
              type="email" 
              placeholder="Email ID" 
              required
            />
          </div>

          <div className='mb-2 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] border border-gray-300'>
            <img src={assets.lock_icon} alt=""/>
            <input 
              onChange={e => setPassword(e.target.value)} 
              value={password}
              className='bg-transparent outline-none w-full' 
              type={showPassword ? "text" : "password"}  // 🔹 Toggle password visibility
              placeholder="Password" 
              required
            />
          </div>

          {/* ✅ Checkbox to Show/Hide Password */}
          <div className="flex items-center gap-2 mb-4">
            <input 
              type="checkbox" 
              id="showPassword" 
              className="cursor-pointer"
              onChange={() => setShowPassword(!showPassword)} 
            />
            <label htmlFor="showPassword" className="text-xs cursor-pointer">
              Show Password
            </label>
          </div>

          <p onClick={()=>navigate('/reset-password')} className='mb-4 text-indigo-500 cursor-pointer'>Forgot Password?</p>

          <button className='w-full py-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-900 
            font-medium transition-all duration-300 hover:from-indigo-700 hover:to-indigo-500 hover:shadow-lg'>        
              {state}
          </button>

        </form>

        {state === 'Sign up' ? (
          <p className='text-gray-400 text-center text-xs mt-4'>
            Already have an account?{' '}
            <span onClick={()=> setState('Login')} className='text-blue-400 cursor-pointer underline'>
              Login Here 
            </span>
          </p>
        ) 
        : ( 
          <p className='text-gray-400 text-center text-xs mt-4'>
            Don't have an account?{' '}
            <span onClick={()=> setState('Sign up')}
            className='text-blue-400 cursor-pointer underline'>
              Sign Up Here 
            </span>
          </p>
        )}

        <br />

        <button onClick={()=>navigate('/')} className='w-full py-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-900 
          font-medium transition-all duration-300 hover:from-indigo-700 hover:to-indigo-500 hover:shadow-lg'>        
          Home
        </button>

      </div>
    </div>
  )
}

export default Login
