import React from 'react';
import Carousel from 'react-grid-carousel'
import { SiFacebook } from 'react-icons/si';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import "./Team.css";


const Team = () => {
    return (
        <div className='mb-32'>
            <div className="service-text text-center mb-12">
                <h3 className="font-bold text-xl text-secondary">Team</h3>
                <h2 className="font-bold text-5xl my-5">Meet Our Team</h2>
                <p className="md:w-[717px] mx-auto capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p>
            </div>

            <Carousel cols={3} rows={1} gap={10} loop>
            <Carousel.Item>
                <div className='border text-center border-[#E8E8E8] p-6 md:h-[480px] rounded-lg'>
                    <img width="100%" className='rounded-lg md:h-[300px]' src="https://i.ibb.co/2hVZ5hL/3.jpg" />
                    <p className="font-bold text-2xl mt-5">Car Engine Plug</p>
                    <p className="font-semibold text-xl text-[#737373] mt-2">Engine Expert</p>
                    <div className='flex justify-center mt-2 mb-7'>
                    <SiFacebook className='text-info w-8 h-8 mr-2'></SiFacebook>
                    <AiFillTwitterCircle className='text-warning w-8 h-8 mr-2'></AiFillTwitterCircle>
                    <AiFillLinkedin className='text-[#0A66C2] w-8 h-8 mr-2'></AiFillLinkedin>
                    <FaInstagramSquare className='text-pink-400 w-8 h-8 mr-2'></FaInstagramSquare>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='border text-center border-[#E8E8E8] p-6 md:h-[480px] rounded-lg'>
                    <img width="100%" className='rounded-lg md:h-[300px]' src="https://i.ibb.co/Yb5yQM6/2.jpg" />
                    <p className="font-bold text-2xl mt-5">Car Engine Plug</p>
                    <p className="font-semibold text-xl text-[#737373] mt-2">Engine Expert</p>
                    <div className='flex justify-center mt-2 mb-7'>
                    <SiFacebook className='text-info w-8 h-8 mr-2'></SiFacebook>
                    <AiFillTwitterCircle className='text-warning w-8 h-8 mr-2'></AiFillTwitterCircle>
                    <AiFillLinkedin className='text-[#0A66C2] w-8 h-8 mr-2'></AiFillLinkedin>
                    <FaInstagramSquare className='text-pink-400 w-8 h-8 mr-2'></FaInstagramSquare>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='border text-center border-[#E8E8E8] p-6 md:h-[480px] rounded-lg'>
                    <img width="100%" className='rounded-lg md:h-[300px]' src="https://i.ibb.co/MRKCsFH/1.jpg" />
                    <p className="font-bold text-2xl mt-5">Car Engine Plug</p>
                    <p className="font-semibold text-xl text-[#737373] mt-2">Engine Expert</p>
                    <div className='flex justify-center mt-2 mb-7'>
                    <SiFacebook className='text-info w-8 h-8 mr-2'></SiFacebook>
                    <AiFillTwitterCircle className='text-warning w-8 h-8 mr-2'></AiFillTwitterCircle>
                    <AiFillLinkedin className='text-[#0A66C2] w-8 h-8 mr-2'></AiFillLinkedin>
                    <FaInstagramSquare className='text-pink-400 w-8 h-8 mr-2'></FaInstagramSquare>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Team;