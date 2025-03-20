import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
    const handleScrollToServices = () => {
        document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="hero">
            <video autoPlay loop muted className="hero-video">
                <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>

            <div className="hero-overlay"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="hero-title">Welcome to Our Platform</h1>
                <p className="hero-subtitle">
                    Experience the best services with lightning-fast performance.
                </p>

            </motion.div>
        </section>
    );
};

export default Hero;
