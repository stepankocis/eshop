import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

const products = [
    {
        id: 1,
        name: "Hodinky",
        price: 1500,
        desc: "jednoduché hodinky",
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 2,
        name: "Batoh",
        price: 3500,
        desc: "Batoh... co ví",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.bo3HzgNkwYL3ppaUNTxyGwHaJ4%3Fpid%3DApi&f=1&ipt=23d2a1198bd40fb0747a7a8b4da9fef05b2b96c6100f6e08285ba1fa40ecd674&ipo=images"
    },
    {
        id: 3,
        name: "Brýle",
        price: 250,
        desc: "neco, dochází mi nápady",
        image: "https://cdn.myshoptet.com/usr/www.hotovebryle.cz/user/shop/big/40432_66529-1-jpg-big.jpg?6854f81b"
    },
    {
        id: 4,
        name: "Bezdratová myš",
        price: 999,
        desc: "myš kliká",
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 5,
        name: "Facebook účet",
        price: 159,
        desc: "ukradnutý facebook účet",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdzfQM8GnCB0X2-o0NPSP2CPoxU5Y5Pio0g&s"
    },
];

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart));
            } catch {
                // Ignore invalid stored data
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [
                ...prevCart,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                },
            ];
        });
    };

    const removeFromCart = (idToRemove) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== idToRemove));
    };

    const updateQuantity = (id, delta) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <Navbar cartCount={cartItemCount} />
            <Routes>
                <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;