import "./Home.css";
import Carousel from '../Carousel/Carousel';
import AboutUs from "../AboutUs/AboutUs";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <Service></Service>
        </div>
    );
};

export default Home;