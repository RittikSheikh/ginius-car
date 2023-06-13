import { useContext } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Chekout = () => {

    const chekoutData = useLoaderData();
    const [selectedService, setSelectedService] = useState(chekoutData);
    // console.log(selectedService)
    const {user} = useContext(AuthContext)


    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const order = {
            service: selectedService.title,
            id: selectedService._id,
            customer: {
                name,
                phone,
                email
            }
        }
        console.log(order)
    }


    return (
        <div>

            <div className="my-10 md:my-24 bg-rose-300 bg-no-repeat bg-cover bg-center md:h-[400px] rounded-lg" style={{backgroundImage: `url(${selectedService.img})`}}>
                <h1 className="bal">you are going to place order {selectedService.title}</h1>
                <h2>Price: {selectedService.price}</h2>
            </div>
            <div className="bg-[#F3F3F3] p-10 md:p-24 my-10 md:my-32 rounded-xl">
                <form onSubmit={handlePlaceOrder}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input name="firstName" type="text" placeholder="First Name" className="input w-full" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input w-full" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input w-full" />
                        <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full" />
                    </div>
                    <textarea className="textarea my-6 w-full h-28 md:h-64" placeholder="Your Message"></textarea>
                    <input className="btn btn-secondary capitalize w-full md:h-16" type="submit" value="order confirm" />
                </form>
            </div>

        </div>
    );
};

export default Chekout;