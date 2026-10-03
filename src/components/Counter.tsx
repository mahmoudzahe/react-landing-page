import { useEffect, useRef, useState } from "react";

interface CounterProps {
    target: number;
    prefix?: string;
    suffix?: string;
}

function Counter({ target, prefix = "", suffix = "" }: CounterProps) {
    const [value, setValue] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);
    const frameRef = useRef<number | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const counter = counterRef.current;

        if (!counter) {
            return;
        }

        const animateCounter = () => {
            const duration = 1500;
            const startTime = performance.now();

            const updateCounter = (currentTime: number) => {
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                setValue(Math.floor(progress * target));

                if (progress < 1) {
                    frameRef.current = requestAnimationFrame(updateCounter);
                }
            };

            frameRef.current = requestAnimationFrame(updateCounter);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry?.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCounter();
                    observer.unobserve(counter);
                }
            },
            {
                threshold: 0.5
            }
        );

        observer.observe(counter);

        return () => {
            observer.disconnect();

            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [target]);

    return (
        <span ref={counterRef} className="counter">
            {prefix}
            {value.toLocaleString()}
            {suffix}
        </span>
    );
}

export default Counter;
