import { useContext } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import axios from "axios";

const Chekout = () => {

    const chekoutData = useLoaderData();
    const [selectedService, setSelectedService] = useState(chekoutData);
    // console.log(selectedService)
    const { user } = useContext(AuthContext)


    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const img = selectedService.img;
        const order = {
            service: selectedService.title,
            id: selectedService._id,
            message,
            img,
            customer: {
                name,
                phone,
                email
            }
        }
        axios.post('http://localhost:5000/orders', order)
        .then(res => {
            console.log(res.data.success)
            if (res.data.success) {
                alert('order placed success')
            }
            else{
                alert('unsuccess')
            }
            form.reset();
        })
        .catch(err => console.log(err))
    }


    return (
        <div>

            <div className="relative">
                <div className="img-gradient w-full h-[350px] rounded-lg bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${selectedService.img})`}}>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 top-1/3 left-5 md:left-24">
                    <h1 className=""><span className="md:text-5xl text-white font-bold">{selectedService.title}</span> <br /> <br />
                    <span className="md:text-xl text-white font-semibold">Price: ${selectedService.price}</span> <br /> <br />
                    <span className="md:text-xl text-white font-semibold">you are going to purchase this service</span></h1>
                </div>
            </div>



            <div className="bg-[#F3F3F3] p-10 md:p-24 my-10 md:my-32 rounded-xl">
                <form onSubmit={handlePlaceOrder}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input name="firstName" type="text" placeholder="First Name" className="input w-full" required/>
                        <input name="lastName" type="text" placeholder="Last Name" className="input w-full" required/>
                        <input name="phone" type="text" placeholder="Your Phone" className="input w-full" required/>
                        <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full" />
                    </div>
                    <textarea name="message" className="textarea my-6 w-full h-28 md:h-64" placeholder="Your Message"></textarea>
                    <input className="btn btn-secondary capitalize w-full md:h-16" type="submit" value="order confirm" />
                </form>
            </div>

        </div>
    );
};

export default Chekout;