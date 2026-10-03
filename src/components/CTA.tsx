import { useReveal } from "../hooks/useReveal";

function CTA() {
    const revealRef = useReveal();

    return (
        <section className="cta section" id="cta">
            <div
                ref={revealRef}
                className="container cta-content reveal"
            >
                <h2>Ready to grow your business?</h2>

                <p>
                    Start building a smarter workflow today.
                </p>

                <a href="#home" className="btn cta-btn">
                    Get Started
                </a>
            </div>
        </section>
    );
}

export default CTA;