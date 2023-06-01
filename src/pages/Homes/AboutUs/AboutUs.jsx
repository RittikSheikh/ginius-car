import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className="md:flex md:p-0 mb-32">
            <div className="image-container md:w-1/2 mb-40 md:mb-0 relative">
                <img src={person} className=' w-[90%] md:w-4/5 rounded-lg' alt="" />
                <img src={parts} className='w-[75%] md:w-3/5 absolute top-2/4 left-1/4 md:left-1/4 border-8 border-white rounded-lg' alt="" />
            </div>
            <div className="details md:w-1/2">
                <h2 className="text-xl font-bold text-secondary mb-5">About Us</h2>
                <h1 className="font-bold text-5xl mb-7">We are qualified <br /> & of experience <br /> in this field</h1>
                <div className='md:w-[489px] mb-7'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p> 
                <br />
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <button className='btn btn-secondary capitalize'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;