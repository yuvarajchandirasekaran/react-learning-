import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import PromoBanner from './components/PromoBanner';
import Features from './components/Features';
import Footer from './components/Footer';
import MiniCart from "./components/MiniCart";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

    const handleAddToCart = (product, quantity) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + quantity,
                          }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity,
                },
            ];
        });

        setIsMiniCartOpen(true);
    };

    const handleUpdateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            handleRemoveItem(productId);
            return;
        }

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                          ...item,
                          quantity,
                      }
                    : item
            )
        );
    };

    const handleRemoveItem = (productId) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        );
    };

    const cartItemCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            <Header
                cartItemCount={cartItemCount}
                cartTotal={cartTotal}
                onCartClick={() => setIsMiniCartOpen(true)}
            />

            <main>
                <Hero />
                <Categories />

                <FeaturedProducts
                    onAddToCart={handleAddToCart}
                />

                <PromoBanner />
                <Features />
            </main>

            <Footer />

            <MiniCart
                isOpen={isMiniCartOpen}
                cartItems={cartItems}
                cartTotal={cartTotal}
                onClose={() => setIsMiniCartOpen(false)}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
            />
        </>
    );
}

export default App;