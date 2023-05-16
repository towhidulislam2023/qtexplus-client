import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaStopwatch } from "react-icons/fa";
import { Link } from "react-router-dom";
const DoctorServices = () => {
    const [doctorServices, setDoctorServices] = useState([])
    useEffect(() => {
        fetch("https://qtexplus-doctor-server.vercel.app/doctorsinfo")
            .then(res => res.json())
            .then(data => {
                setDoctorServices(data);
            })
    }, [])
    return (
        <div className="my-5">
            <h1 className="text-5xl font-bold">Explore Our Doctors Services</h1>
            <div className="divider"></div>
            {
                doctorServices ? <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-6">
                    {
                        doctorServices && doctorServices.map(service => <div key={service._id} className=" border  items-center p-4">
                            <div className="relative">
                                <img className=" w-full rounded-lg h-44  " src={service.image} alt="" />
                                <div className="absolute top-0 right-2 bg-warning px-2 py-1 my-2 rounded">{service.speciality}</div>
                            </div>
                            <div>
                                <div className="flex mt-5 gap-2">
                                    <h1 className="text-4xl">{service.doctorname}</h1>

                                    {/* <div className=" btn   py-0 px-4 badge badge-warning"></div> */}

                                </div>

                                <p>MBBS , {service.degree}</p>
                                <p className="text-sm">Description:  {service.description}</p>

                                <div className="flex justify-between items-center">
                                    <span className="flex gap-4 my-5 items-center"><FaStopwatch className="text-3xl"></FaStopwatch> {service.time}</span>


                                    <Link to={`/appiontment/${service._id}`}> <button className="btn btn-circle btn-warning btn-outline">
                                        <FaArrowCircleRight className="text-4xl"></FaArrowCircleRight>
                                    </button></Link>
                                </div>



                            </div>
                        </div>)
                    }

                </div> : <progress className="progress w-56 mx-auto"></progress>
            }
            
        </div>
    );
};

export default DoctorServices;