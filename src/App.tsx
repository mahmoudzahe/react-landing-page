import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    useEffect(() => {
        document.title = "NovaFlow - Grow Your Business";
    }, []);

    return (
        <>
            <Header />

            <main>
                <Hero />
                <Features />
                <About />
                <CTA />
            </main>

            <Footer />
        </>
    );
}

export default App;
