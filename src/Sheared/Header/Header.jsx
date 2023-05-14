import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProviderContext } from "../../Provider/AuthProvider";



const Header = () => {
    const { user, logout }=useContext(AuthProviderContext)
   const handelLogOut=()=>{
       logout()
   }
    return (
        <div className="my-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className="text-xl font-semibold" to={""}>About</Link></li>
                            <li><Link className="text-xl font-semibold" to={""}>Contact Us</Link></li>
                            <li><Link className="text-xl font-semibold" to={"/bookedAppiontment"}>Your Appointment</Link></li>
                            
                        </ul>
                    </div>
                    <Link to={"/"}> <img className="h-14" src="https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg?w=900&t=st=1684035585~exp=1684036185~hmac=2b83efd502b7f4892d5d6c19c71d16dc1a90061efc442e8e911c51ba95b1f53e" alt="" /></Link> 
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className="text-xl font-semibold" to={""}>About</Link></li>
                        <li><Link className="text-xl font-semibold" to={""}>Contact Us</Link></li>
                        <li><Link className="text-xl font-semibold" to={"/bookedAppiontment"}>Your Appointment</Link></li>
                        <div className="divider divider-horizontal"></div>
                        {
                            user ? <div className="dropdown">
                                <label tabIndex={0} className=" m-1"><div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                        
                                        {
                                            user.photoURL ? <img src={user.photoURL} alt="" /> : <span>Qtex</span>
                                        }
                                        
                                    </div>
                                </div> </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link>Profile</Link></li>
                                    <li><button onClick={handelLogOut} className="btb btn-warning">Log Out</button></li>
                                </ul>
                            </div> : <Link className="btn btn-error px-5 py-0" to={"/login"}>Login</Link>
                        }
                     
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-warning">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;