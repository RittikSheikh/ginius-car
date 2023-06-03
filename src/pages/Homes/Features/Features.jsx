import React from 'react';
import img1 from "../../../assets/icons/check.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/Group 38729.svg";
import img4 from "../../../assets/icons/group.svg";
import img5 from "../../../assets/icons/person.svg";
import img6 from "../../../assets/icons/quote.svg";
import img7 from "../../../assets/icons/Wrench.svg";
import FeautesCards from './FeautesCards';

const Features = () => {

    const featuresCards = [
        {
            id: 1,
            image: img1,
            title: '100% Guranty'
        },
        {
            id: 2,
            image: img2,
            title: 'Timely Delivery'
        },
        {
            id: 3,
            image: img3,
            title: 'Expert Team'
        },
        {
            id: 4,
            image: img4,
            title: '24/7 Support'
        },
        {
            id: 5,
            image: img5,
            title: 'Best Equipment'
        },
        {
            id: 7,
            image: img7,
            title: 'Best Equipment'
        },
    ];

    return (
        <div className='mb-32'>
            <div className="service-text text-center mb-12">
                <h3 className="font-bold text-xl text-secondary">Core Features</h3>
                <h2 className="font-bold text-5xl my-5">Why Choose Us</h2>
                <p className="md:w-[717px] mx-auto capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p>
            </div>
            <div className="freatures-cards flex flex-wrap gap-4 justify-center md:justify-evenly">
                {
                    featuresCards.map(card => <FeautesCards key={card.id} data={card}></FeautesCards>)
                }
            </div>
        </div>
    );
};

export default Features;