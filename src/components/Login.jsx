import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
    const [credentials,setcredentials]=useState({username:'',password:''})
    let navigate= useNavigate()
    const handleClick=async(e)=>{
        e.preventDefault();
        const url="http://localhost:5000/api/auth/login";
        const response =await fetch(url,{
            method : 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username:credentials.username,password:credentials.password})
        })
        const json =await response.json()
        if(json.success){
            // save the auth token and redirect
            localStorage.setItem('token',json.authtoken)
            navigate('/')
        }else{
            // nothing 
        }
        console.log(json);
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (<>
  <section className="text-gray-600 body-font">
<form onSubmit={handleClick}>
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login </h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Uesrname </label>
        <input type="text"  name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={credentials.username} minLength={5} required onChange={onChange} />
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password"  name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" minLength={5} required onChange={onChange} value={credentials.password} />
        
      </div>
      <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    
    </div>
  </div>
</form>
</section>
  </>
  )
}

export default Login