import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import CarouselItem from "./CarouselItem";


const Carousel = () => {

const carouselItems = [
    {
        id: 1,
        image: img1,
        next: 2,
        prev: 6
    },
    {
        id: 2,
        image: img2,
        next: 3,
        prev: 1
    },
    {
        id: 3,
        image: img3,
        next: 4,
        prev: 2
    },
    {
        id: 4,
        image: img4,
        next: 5,
        prev: 3
    },
    {
        id: 5,
        image: img5,
        next: 6,
        prev: 4
    },
    {
        id: 6,
        image: img6,
        next: 1,
        prev: 5
    },
];

    return (
        <div className="carousel md:max-w-screen-xl md:h-[750px] mx-auto rounded-xl mt-12 mb-32 ">
            {
                carouselItems.map(item => <CarouselItem key={item.id} data={item}></CarouselItem>)
            }
        </div>
    );
};

export default Carousel;