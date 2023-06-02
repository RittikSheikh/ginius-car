import React from 'react';

const FeautesCards = ({ data }) => {
    const { id, image, title } = data;
    return (
        <div className='w-44 h-40 rounded-lg bg-[#E8E8E8] hover:bg-secondary hover:text-white'>
            <div className='flex hover:text-white items-center flex-col text-center p-7'>
                <img src={image} alt="" />
                <p className="font-bold text-lg mt-5">{title}</p>
            </div>
        </div>
    );
};

export default FeautesCards;