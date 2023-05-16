import docimg from '../../../assets/about/Doctors.jpg';
import hosimg from '../../../assets/about/hospital.jpg';
const AboutUs = () => {
    return (
        <div className="py-14 px-4 ">
            <h1 className="text-5xl font-bold">About Us</h1> 
              <div className="divider"></div> 
              <div className=''>
                <div className='md:relative  p-4 '>
                    <img className='md:w-[60%]' src={hosimg} alt="" />
                    <img className='w-[40%] hidden md:block border-8 border-white absolute -bottom-9 right-96' src={docimg} alt="" />
                    <div className='md:w-[50%] md:absolute top-0 -right-36'>
                        <h1 className="text-4xl font-semibold">About Qtex Plus</h1>

                        <p className='my-5 md:w-[80%]'>
                            QTex Plus is a website that provides textile-related services including the sale of machinery and equipment, raw materials, consulting services, and a marketplace for buying and selling textile products and services. The website is designed to help businesses and individuals in the textile industry improve efficiency and productivity, make informed decisions, and connect with others in the industry.</p>
                        <button className="btn btn-warning">Learn More</button>
                    </div>
                </div>
              </div>
        </div>
    );
};

export default AboutUs;