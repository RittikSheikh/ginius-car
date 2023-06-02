import { AiFillStar } from 'react-icons/ai';
const ProductsCard = ({data}) => {
    const {img, price,description, title, _id} = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-[#E8E8E8] ">
            <div className='bg-[#F3F3F3] m-5 rounded-lg'><img className='w-full p-2 md:h-[210px]' src={img} alt="" /></div>
            <div className="card-body items-center mb-5">
                <div className='flex text-primary'>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                </div>
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p className='text-secondary font-semibold text-xl'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductsCard;