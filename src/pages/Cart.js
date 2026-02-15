import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="container py-4">
            <h2 className="mb-4">Your Cart</h2>
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {cart.map((item) => (
                                    <li
                                        key={item.id}
                                        className="list-group-item d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="rounded me-3"
                                                style={{
                                                    width: '64px',
                                                    height: '64px',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                            <div>
                                                <div className="fw-semibold">
                                                    {item.name}
                                                </div>
                                                <div className="text-muted small">
                                                    ${item.price} each
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="btn-group me-3" role="group">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={() =>
                                                        updateQuantity(item.id, -1)
                                                    }
                                                >
                                                    −
                                                </button>
                                                <span className="px-2">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={() =>
                                                        updateQuantity(item.id, 1)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="text-end me-3">
                                                <div className="fw-semibold">
                                                    {(
                                                        item.price * item.quantity
                                                    ).toFixed(2)} czk
                                                </div>
                                                <div className="text-muted small">
                                                    Subtotal
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-link text-danger text-decoration-none"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Order summary</h5>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Items</span>
                                <span>
                                    {cart.reduce(
                                        (sum, item) => sum + item.quantity,
                                        0
                                    )}
                                </span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Total</span>
                                <span className="fw-bold">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary w-100 mt-3"
                                disabled
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
