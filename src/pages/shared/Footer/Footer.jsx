import "./Footer.css";
import logo from "../../../assets/logo/logo.svg";
import { AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer p-10 md:p-[140px] bg-warning text-white">
            <div>
                <img src={logo} alt="" />
                <p className="w-[283px]">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className="flex mt-5">
                    <AiFillGoogleCircle className="w-[36px] h-[34px]"></AiFillGoogleCircle>
                    <AiFillTwitterCircle className="w-[36px] h-[34px] "></AiFillTwitterCircle>
                    <AiFillInstagram className="w-[36px] h-[34px] "></AiFillInstagram>
                    <AiFillLinkedin className="w-[36px] h-[34px] "></AiFillLinkedin>
                </div>
            </div>
            <div>
                <span className="font-semibold text-xl mb-10">About</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="font-semibold text-xl mb-10">Company</span>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
            </div>
            <div>
                <span className="font-semibold text-xl mb-10">Support</span>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </div>
        </footer>
    );
};

export default Footer;