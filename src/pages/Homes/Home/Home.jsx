import "./Home.css";
import Carousel from '../Carousel/Carousel';
import AboutUs from "../AboutUs/AboutUs";
import Service from "../Service/Service";
import BasicInfo from "../BasicInfo/BasicInfo";
import Products from "../Products/Products";
import Team from "../Team/Team";
import Features from "../Features/Features";
import CustomerComment from "../CustomarComment/CustomarComment";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <div id="service">
            <Service></Service>
            </div>
            <BasicInfo></BasicInfo>
            <Products></Products>
            <Team></Team>
            <Features></Features>
            <CustomerComment></CustomerComment>
        </div>
    );
};

export default Home;