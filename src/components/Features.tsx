import { featureData } from "../constants/featureData";
import { useReveal } from "../hooks/useReveal";

function Features() {
    const revealRef = useReveal();

    return (
        <section
            className="features section"
            id="features"
        >
            <div className="container">
                <div
                    ref={revealRef}
                    className="section-header reveal"
                >
                    <span>Features</span>

                    <h2>
                        Everything you need to move forward
                    </h2>

                    <p>
                        Powerful tools designed to make your daily work easier
                        and more efficient.
                    </p>
                </div>

                <div className="features-grid">
                    {featureData.map((feature) => (
                        <article
                            ref={revealRef}
                            className="feature-card reveal"
                            key={feature.number}
                        >
                            <div className="feature-icon">
                                {feature.number}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;