import Counter from "./Counter";
import { useReveal } from "../hooks/useReveal";

const chartBars = Array.from({ length: 6 });

function Hero() {
    const revealRef = useReveal();

    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div
                    ref={revealRef}
                    className="hero-text reveal"
                >
                    <span className="hero-badge">
                        Smart. Simple. Powerful.
                    </span>

                    <h1>
                        Grow Your Business <span>Faster</span>
                    </h1>

                    <p>
                        NovaFlow helps teams manage their work, automate tasks,
                        and grow their business from one simple platform.
                    </p>

                    <div className="hero-buttons">
                        <a href="#cta" className="btn primary-btn">
                            Get Started
                        </a>

                        <a
                            href="#features"
                            className="btn secondary-btn"
                        >
                            Explore Features
                        </a>
                    </div>
                </div>

                <div
                    ref={revealRef}
                    className="hero-image reveal"
                >
                    <div className="dashboard-card">
                        <div className="dashboard-header">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="dashboard-content">
                            <div className="stat-card">
                                <small>Total Revenue</small>

                                <h3>
                                    <Counter
                                        target={24580}
                                        prefix="$"
                                    />
                                </h3>

                                <p>+18.5%</p>
                            </div>

                            <div className="chart">
                                {chartBars.map((_, index) => (
                                    <div key={index}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;