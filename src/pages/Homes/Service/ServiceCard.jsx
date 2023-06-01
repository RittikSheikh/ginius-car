import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
const ServiceCard = ({data}) => {
    console.log(data)
    const {img, price,description, title, _id} = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-[#E8E8E8] ">
            <div className='p-6'><img className='w-full md:h-[210px] rounded-lg' src={img} alt="" /></div>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className='flex justify-between'>
                <p className='text-secondary font-semibold text-xl'>Price: ${price}</p>
                <AiOutlineArrowRight className='text-2xl text-secondary'></AiOutlineArrowRight>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;