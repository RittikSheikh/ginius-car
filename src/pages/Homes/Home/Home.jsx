import "./Home.css";
import Carousel from '../Carousel/Carousel';
import AboutUs from "../AboutUs/AboutUs";
import Service from "../Service/Service";
import BasicInfo from "../BasicInfo/BasicInfo";
import Products from "../Products/Products";
import Team from "../Team/Team";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <Service></Service>
            <BasicInfo></BasicInfo>
            <Products></Products>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;