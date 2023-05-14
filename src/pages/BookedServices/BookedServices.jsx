import { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../../Provider/AuthProvider";


const BookedServices = () => {
    const { user } = useContext(AuthProviderContext)
    const [appiontmentInfo, setAppiontmentInfo] = useState([])
    useEffect(() => {
        if (!user?.email) return;
        const url = `https://qtexplus-doctor-server.vercel.app/appiontmentinfo?email=${user.email}`
        fetch(url,{
            method:"GET",
            headers:{
                authorization: `Bearer ${localStorage.getItem("token-for")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppiontmentInfo(data);
            })

    }, [user?.email])
    const handelPaymentSatus = (id) => {
        console.log("for Update", id);
        fetch(`https://qtexplus-doctor-server.vercel.app/updateappiontmentInfo/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "paid" })

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remainingServices = appiontmentInfo.filter(appiontment => appiontment._id !== id)
                    const updatedServices = appiontmentInfo.find(appionment => appionment._id === id)
                    updatedServices.status = "paid"
                    const newUpdatedServices = [updatedServices, ...remainingServices]
                    setAppiontmentInfo(newUpdatedServices)
                }
            })
    }

    const delletAppiontment=(id)=>{
        console.log(id);
        fetch(`https://qtexplus-doctor-server.vercel.app/deleteappiontment/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount>0) {
                const remainingServices = appiontmentInfo.filter(appiontment => appiontment._id !== id)
                setAppiontmentInfo(remainingServices)
                
            }
            // console.log(data);
        })

    }

    return (
        <div className="my-10">
            <h1 className=" text-4xl font-bold">Your Appiontment Hear</h1>
            <div className="divider"></div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Doctors Name And others info</th>
                            <th>Date</th>
                            <th>Your Name</th>
                            <th>price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appiontmentInfo && appiontmentInfo.map(appionment => <tr key={appionment._id}>
                                <th>
                                    <button onClick={() => delletAppiontment(appionment._id)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={appionment?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{appionment?.doctorname
                                            }</div>
                                            <div className="text-sm opacity-50">{appionment?.speciality}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <p>{appionment?.date}</p>
                                </td>
                                <td>
                                    <p>{appionment?.name}</p>
                                </td>
                                <td>{appionment?.visitfee}</td>
                                <th>
                                    {
                                        appionment.status === "paid" ? <span className="text-green-500 font-bold text-3xl">PAID</span> : <button onClick={() => handelPaymentSatus(appionment._id)} className="btn btn-warning btn-xs">Pay</button>
                                    }

                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedServices;