import AboutUs from "../AboutUs/AboutUs";
import DoctorServices from "../DoctorServices/DoctorServices";
import HomeBannar from "../HomeBannar/HomeBannar";


const Home = () => {
    return (
        <div>
            <HomeBannar></HomeBannar>
            <AboutUs></AboutUs>
            <DoctorServices></DoctorServices>
        </div>
    );
};

export default Home;