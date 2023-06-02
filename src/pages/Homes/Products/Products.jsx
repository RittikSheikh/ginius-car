import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {

    const [productsCards, setProductsCards] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProductsCards(data))
    },[])


    return (
        <div className="service-container mb-32">
            <div className="service-text text-center mb-12">
                <h3 className="font-bold text-xl text-secondary">Popular Products</h3>
                <h2 className="font-bold text-5xl my-5">Browse Our Products</h2>
                <p className="md:w-[717px] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        productsCards.map(card => <ProductsCard key={card._id} data={card}></ProductsCard>)
                    }
            </div>
            <div className="text-center">
            <button className="capitalize btn btn-outline btn-secondary mt-12 font-semibold text-lg md:w-40 md:h-14">More Products</button>
            </div>
        </div>
    );
};

export default Products;