import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
    return (
        <div className="container py-4">
            <div className="row">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;