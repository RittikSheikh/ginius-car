import Carousel from 'react-grid-carousel';
import img from "../../../assets/icons/quote.svg";
import { AiFillStar } from 'react-icons/ai';
import "./CustomarComment.css";

const CustomerComment = () => {
    return (
        <div className='mb-32'>
            <div className="service-text text-center mb-12">
                <h3 className="font-bold text-xl text-secondary">Testimonial</h3>
                <h2 className="font-bold text-5xl my-5">What Customer Says</h2>
                <p className="md:w-[717px] mx-auto capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p>
            </div>

            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <div className='border py-2 md:p-14 md:h-[350px] rounded-lg border-[#F3F3F3]'>
                        <div className="header mb-5 flex items-end">
                            <img className='rounded-full w-16 h-16 mr-5' src="https://i.ibb.co/Yb5yQM6/2.jpg" alt="" />
                            <div>
                                <p className="font-bold text-xl md:text-2xl mt-5">Car Engine Plug</p>
                                <p className="font-semibold text-xl text-[#737373] mt-2">Engine Expert</p>
                            </div>
                            <img className=' w-14 h-14 ml-10 md:ml-32' src={img} alt="" />
                        </div>
                        <div className="comment md:w-[480px]">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p>
                            <div className='flex text-primary mt-5'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='border md:p-14 md:h-[350px] rounded-lg border-[#F3F3F3]'>
                        <div className="header py-2 mb-5 flex items-end">
                            <img className='rounded-full w-16 h-16 mr-5' src="https://i.ibb.co/Yb5yQM6/2.jpg" alt="" />
                            <div>
                                <p className="font-bold text-xl md:text-2xl mt-5">Car Engine Plug</p>
                                <p className="font-semibold text-xl text-[#737373] mt-2">Engine Expert</p>
                            </div>
                            <img className=' w-14 h-14 ml-10 md:ml-32' src={img} alt="" />
                        </div>
                        <div className="comment md:w-[480px]">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p>
                            <div className='flex text-primary mt-5'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CustomerComment;