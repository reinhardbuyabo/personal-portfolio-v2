import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 },
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                },
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <a
                                href="https://github.com/reinhardbuyabo/portfolio-optimization-system"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/risk.jpg"
                                    alt="LSTM-GARCH"
                                    style={{ objectFit: "contain" }}
                                />
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Portfolio Optimization System</h2>
                            <p className="text-white-50 md:text-xl">
                                A Time Series Model and Analysis project that entails a hybrid
                                implementation of LSTM and GARCH models that forecast daily
                                stock prices and model volatility on the Nairobi Securities
                                Exchange
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <a
                                    href="https://github.com/reinhardbuyabo/Crowdfunding-Go"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/crowdfunding.svg"
                                        alt="Crowdfunding Platform"
                                        style={{ objectFit: "contain" }}
                                    />
                                </a>
                            </div>
                            <h2>Crowdfunding App</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <a
                                    href="https://github.com/Fidelisaboke/mobile-money-transaction-analysis"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/fraud-detection.svg"
                                        alt="Fraud Detection"
                                    />
                                </a>
                            </div>
                            <h2>Fraud Detection using Machine Learning</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
