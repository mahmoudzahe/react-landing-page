import { useEffect, useState } from "react";
import { navItems } from "../constants/navItems";

function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>(
            "main section[id]"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px"
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
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
                                activeSection === item.section
                                    ? "active"
                                    : ""
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