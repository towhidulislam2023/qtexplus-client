import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProviderContext } from "../../Provider/AuthProvider";


const Appiontment = () => {
    const { user } = useContext(AuthProviderContext)
    console.log(user);
    const doctorsData = useLoaderData()
    console.log(doctorsData);
    const handelAppiontmentFromdata = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const age = form.age.value
        const date = form.date.value
        const description = form.description.value
        const bookedAppiontmentDetails = {
            name,
            email,
            age,
            date,
            description,
            doctorname: doctorsData.doctorname,
            visitfee: doctorsData.visitfee,
            speciality: doctorsData.speciality,
            image: doctorsData.image
        }
        fetch("https://qtexplus-doctor-server.vercel.app/addedappiontmentinfo", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookedAppiontmentDetails)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        console.log(bookedAppiontmentDetails);
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-[50%] mx-6 md:mx-0 relative my-3">
                    <img className=" h-[50vh] md:h-full rounded-lg" src={doctorsData && doctorsData.image} alt="" />
                    <div className="absolute bottom-0 md:top-1/2 right-2 rounded-lg bg-slate-500 text-white md:py-5 md:px-3 ">
                        <h1 className="md:text-5xl text-3xl">{doctorsData && doctorsData.doctorname}</h1>
                        <p>{doctorsData && doctorsData.speciality}</p>
                    </div>

                </div>
                <div className="md:w-[50%] mx-6 md:mx-0 px-12 my-3 bg-slate-200 py-10 rounded-lg">
                    <h1 className="text-4xl font-bold w-[85%]">WellCome To Our Hospital <span className="text-6xl font-extrabold text-amber-800">Qtex Plus</span></h1>
                    <h1 className="text-center text-3xl font-semibold my-2">Appiontment Form</h1>
                    <form className="my-10" onSubmit={handelAppiontmentFromdata}>
                        <label className="label">
                            <span className="label-text text-xl">Name:</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" defaultValue={user?.displayName} className="input input-bordered w-full " />
                        <label className="label mt-3">
                            <span className="label-text text-xl">Email:</span>
                        </label>
                        <input type="email" placeholder="Type here" name="email" defaultValue={user?.email} className="input input-bordered w-full " />
                        <label className="label mt-3">
                            <span className="label-text text-xl">Age:</span>
                        </label>
                        <input type="text" placeholder="Type here" name="age" className="input input-bordered w-full " />

                        <label className="label mt-3">
                            <span className="label-text text-xl">Date:</span>
                        </label>
                        <input className="input input-bordered w-full" type="date" name="date" id="" />
                        <label className="label mt-3">
                            <span className="label-text text-xl">Write Shortly Your Problem:</span>
                        </label>
                        <textarea name="description" className="textarea-primary w-full my-3 rounded-lg" id="" cols="30" rows="5"></textarea>
                        <input className="btn btn-block my-5 btn-warning" type="submit" value="Take Appiontment" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appiontment;