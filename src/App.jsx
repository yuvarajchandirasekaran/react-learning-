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

function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Categories />
                <FeaturedProducts />
                <PromoBanner />
                <Features />
            </main>

            <Footer />
        </>
    );
}

export default App;