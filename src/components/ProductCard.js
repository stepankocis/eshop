import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 border-0 shadow-sm">
                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-1">{product.name}</h5>
                    <p className="card-text text-muted small mb-2">
                        {product.desc}
                    </p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-primary">{product.price} czk</span>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;