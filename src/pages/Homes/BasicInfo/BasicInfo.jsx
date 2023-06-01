import { SlCalender } from 'react-icons/sl';
import { MdWatchLater } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiMessageRoundedDots } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
const BasicInfo = () => {
    return (
        <div className="footer py-24 px-16 bg-black text-white rounded-lg my-32">
            <div className='flex gap-5'>
                <div className='relative'>
                <SlCalender className='w-10 h-10'></SlCalender>
                <MdWatchLater className='text-secondary w-7 h-6 absolute top-6 left-5'></MdWatchLater>
                </div>
                <div>
                    <p className='semibold'>We are open monday-friday</p>
                    <p className='font-bold text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='relative'>
                <BsFillTelephoneFill className='w-10 h-10'></BsFillTelephoneFill>
                <BiMessageRoundedDots className='text-secondary w-7 h-6 absolute top-1 left-6'></BiMessageRoundedDots>
                </div>
                <div>
                    <p className='semibold'>Have a question?</p>
                    <p className='font-bold text-2xl'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex'>
            <VscLocation className='text-secondary w-10 h-10'></VscLocation>
            <div>
                    <p className='semibold'>Need a repair? our address</p>
                    <p className='font-bold text-2xl'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;