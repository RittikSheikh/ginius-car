import "./Home.css";
import Carousel from '../Carousel/Carousel';
import AboutUs from "../AboutUs/AboutUs";
import Service from "../Service/Service";
import BasicInfo from "../BasicInfo/BasicInfo";
import Products from "../Products/Products";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <Service></Service>
            <BasicInfo></BasicInfo>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;