import Counter from "./Counter";
import { useReveal } from "../hooks/useReveal";

function About() {
    const revealRef = useReveal();

    return (
        <section className="about section" id="about">
            <div className="container about-content">
                <div
                    ref={revealRef}
                    className="about-image reveal"
                >
                    <div className="about-box">
                        <Counter
                            target={10000}
                            suffix="+"
                        />

                        <p>Active Users</p>
                    </div>
                </div>

                <div
                    ref={revealRef}
                    className="about-text reveal"
                >
                    <span>About NovaFlow</span>

                    <h2>
                        Built to help modern teams work smarter
                    </h2>

                    <p>
                        We believe business tools should be powerful without
                        being complicated.
                    </p>

                    <p>
                        NovaFlow brings productivity, automation, and analytics
                        together in one platform.
                    </p>

                    <a
                        href="#cta"
                        className="btn primary-btn"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;