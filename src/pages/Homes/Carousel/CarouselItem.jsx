import "./CarouselItem.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const CarouselItem = ({ data }) => {
  const { id, image, next, prev } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="img-gradient w-full h-full">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 top-1/3 left-5 md:left-24">
        <h1 className="md:text-6xl text-white font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 mt-7 md:mt-10 top-2/4 left-5 md:left-24 w-3/4 md:w-[400px]">
        <p className=" text-sm md:text-lg text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute flex md:justify-between transform -translate-y-1/2 mt-7 top-3/4 left-5 md:left-24 w-3/5 md:w-[400px]">
        <button className="btn  btn-secondary w-2/5 mr-3 text-xs md:text-base md:w-[170px] md:h-[56px]">Discover More</button>
        <button className="btn btn-outline text-white hover:btn-secondary text-xs md:text-base w-2/5 md:w-[170px] md:h-[56px]">Latest Project</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 gap-5 right-2  md:right-12 bottom-2 md:bottom-12">
        <a href={`#slide${prev}`} className="btn btn-circle bg-opacity-75 bg-zinc-500 border-none hover:btn-secondary md:w-[60px] md:h-[60px] text-base text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
        <a href={`#slide${next}`} className="btn btn-circle bg-opacity-75 bg-zinc-500 border-none hover:btn-secondary md:w-[60px] md:h-[60px] text-base text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
      </div>
    </div>
  );
};

export default CarouselItem;