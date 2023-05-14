import  { useContext } from 'react';
import {  FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../../Provider/AuthProvider';

const Googlegit = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.pathname || "/"
    const { handelGoogleLogin } = useContext(AuthProviderContext)
    const handelLoginByGoogle = () => {
        handelGoogleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    // const handelLoginByGit = () => {
    //     handelGithubLogin()
    //         .then(result => {
    //             console.log(result.user);
    //             navigate(from, { replace: true })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }
    return (
        <>
            <hr className='border mt-5 border-gray-400  mx-auto' />
            <button onClick={handelLoginByGoogle} className='btn flex w-[100%] mx-auto bg-transparent mt-5 text-black hover:bg-transparent'>
                <span className=''><FaGoogle className='text-blue-600 text-2xl '></FaGoogle></span>  <span className='flex-grow'>Continue with Google </span>
            </button>
            {/* <button onClick={handelLoginByGit} className='btn w-[100%] mx-auto btn-black bg-transparent mt-5 text-black hover:bg-transparent'>
                <span className=''><FaGithub className='text-black text-2xl '></FaGithub></span>  <span className='flex-grow'>Continue with GitHub </span>
            </button> */}
        </>
    );
};

export default Googlegit;