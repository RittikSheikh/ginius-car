import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import bgImg from "../../assets/images/checkout/Rectangle 1548.png";

const Orders = () => {

    const [orders, setOrders] = useState([])

    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))
    }, [userEmail])

    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('order deleted success')
                    const restOrders = orders.filter(order => order._id !== id)
                    setOrders(restOrders);
                }
                else{
                    alert('unsuccess')
                }
            })
            .catch(err => console.log(err))
    }
console.log(orders)
    return (
        <div>
            <div className="relative mb-32">
                <div className="img-gradient w-full h-[350px] rounded-lg bg-no-repeat bg-cover bg-center">
                    <img className="w-full h-full" src={bgImg} alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 top-1/3 left-5 md:left-24">
                    <h1><span className="md:text-5xl text-white font-bold">Mange All Orders</span> <br />
                        <span><p className="font-medium text-secondary mt-3">You Have Orders: <span className="text-white">{orders.length}</span></p></span>
                    </h1>
                </div>
            </div>


            <div className="my-32 flex justify-center">
                <div>
                {
                    orders.map(order => <div key={order._id} className="flex flex-col md:flex-row items-center mb-7">
                        <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="flex">
                            <img className="w-10 h-10 md:w-36 md:h-36 rounded-lg ml-7" src={order.img} alt="" />
                            <div className="ml-7">
                                <p className="font-semibold text-xl mb-1">{order.service}</p>
                                <p className="mb-1">Name: {order.customer.name}</p>
                                <p>Phone: {order.customer.phone}</p>
                            </div>
                        </div>
                        <p className="font-semibold text-xl mx-8 md:mx-[103px]">{order.customer.email}</p>
                        <p className="font-semibold text-xl ml-8 md:ml-[103px]">20/02/24</p>
                        <select className="font-semibold text-xl ml-8 md:ml-[100px] select select-success md:w-[160px] text-success">
                            <option disabled selected>Approved</option>
                        </select>
                    </div>)
                }
                </div>
            </div>

        </div>
    );
};

export default Orders;