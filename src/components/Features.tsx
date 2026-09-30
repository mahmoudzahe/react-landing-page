const features = [
    {
        number: "01",
        title: "Easy to Use",
        description:
            "A simple and intuitive interface that helps your team get started quickly."
    },
    {
        number: "02",
        title: "Smart Automation",
        description:
            "Automate repetitive tasks and save valuable time every day."
    },
    {
        number: "03",
        title: "Real-time Analytics",
        description:
            "Track your performance and understand your business with useful insights."
    }
];

function Features() {
    return (
        <section className="features section" id="features">
            <div className="container">
                <div className="section-header reveal">
                    <span>Features</span>

                    <h2>Everything you need to move forward</h2>

                    <p>
                        Powerful tools designed to make your daily work easier
                        and more efficient.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <article className="feature-card reveal" key={feature.number}>
                            <div className="feature-icon">{feature.number}</div>
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
