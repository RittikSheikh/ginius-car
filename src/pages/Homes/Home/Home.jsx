import "./Home.css";
import Carousel from '../Carousel/Carousel';
import AboutUs from "../AboutUs/AboutUs";
import Service from "../Service/Service";
import BasicInfo from "../BasicInfo/BasicInfo";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <Service></Service>
            <BasicInfo></BasicInfo>
        </div>
    );
};

export default Home;