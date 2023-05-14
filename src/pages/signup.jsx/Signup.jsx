/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../../Provider/AuthProvider";
import Googlegit from "../../Sheared/Header/GoogleGit/Googlegit";

const Signup = () => {
    const { registarUser, updateUserinfo }=useContext(AuthProviderContext)
    const handelRegistarform = (event =>{
        const navigate = useNavigate()
        const location = useLocation()
        const from = location.state?.pathname || "/"
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const passsword = form.password.value
        const ConfirmPasssword = form.ConfirmPassword.value
        console.log(name, email, passsword, ConfirmPasssword);
        registarUser(email,passsword)
        .then(result=>{
            console.log(result);
            updateUserinfo(name)
            navigate(from, { replace: true })
            // form.reset()
        })
        .catch(error=>{
            console.log(error);
        })


    })
    return (
        <div className='my-10 h-screen md:w-[50%] mx-auto px-5'>
            <div className='border border-black px-9 py-2 rounded-md border-opacity-60'>
                <h5 className='text-2xl mt-2 font-bold'>Registar</h5>
                <form onSubmit={handelRegistarform} className='my-12'>
                    <input className='border-l-none border-b-2 border-black border-opacity-5 py-3 outline-none w-full text-black' type="name" required name='name' placeholder='Your Name' />
                    <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email" required name='email' placeholder='Username or Email' />
                    <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='password' placeholder='Passowrd' />
                    <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='ConfirmPassword' placeholder='Confirm Passowrd' />
                    <div className='mt-5 flex items-center justify-between'>
                        <div>
                            <input type="checkbox" name="checkbox" id="" /> <span className='ml-2'>Remember me</span>
                        </div>
                        <div>
                            <Link className='underline text-yellow-500'> <p className='text-yellow-600'>Forgot Password</p></Link>
                        </div>

                    </div>
                    <button className='btn w-[100%] mx-auto btn-warning mt-10'>Registar
                    </button>
                    <p className='text-center my-4'>Alrady have an account ? <Link className='underline text-yellow-600 ' to={'/login'}>Please Login</Link> </p>
                </form>
            </div>
         <Googlegit></Googlegit>
        </div>
    );
};

export default Signup;