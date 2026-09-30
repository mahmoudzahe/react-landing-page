import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", href: "#home", section: "home" },
    { label: "Features", href: "#features", section: "features" },
    { label: "About", href: "#about", section: "about" },
    { label: "Contact", href: "#cta", section: "cta" }
];

function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>("main section[id]")
        );

        const updateActiveSection = () => {
            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 160;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionBottom
                ) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", updateActiveSection, {
            passive: true
        });

        updateActiveSection();

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
        };
    }, []);

    return (
        <header className="header">
            <div className="container navbar">
                <a href="#home" className="logo">
                    NovaFlow
                </a>

                <nav className="nav">
                    {navItems.map((item) => (
                        <a
                            key={item.section}
                            href={item.href}
                            className={
                                activeSection === item.section ? "active" : ""
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a href="#cta" className="nav-button">
                    Get Started
                </a>
            </div>
        </header>
    );
}

export default Header;
