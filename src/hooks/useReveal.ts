import { useCallback, useEffect, useRef } from "react";

export function useReveal() {
    const revealElements = useRef<HTMLElement[]>([]);

    const setRevealRef = useCallback((element: HTMLElement | null) => {
        if (
            element &&
            !revealElements.current.includes(element)
        ) {
            revealElements.current.push(element);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        revealElements.current.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return setRevealRef;
}