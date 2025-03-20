import { motion } from "framer-motion";
import "./Services.css";
import { FaCode, FaMobileAlt, FaCloud, FaRocket } from "react-icons/fa";

const services = [
    {
        id: 1,
        icon: <FaCode />,
        title: "Web Development",
        description: "Modern and responsive web applications built with the latest technologies.",
    },
    {
        id: 2,
        icon: <FaMobileAlt />,
        title: "Mobile Development",
        description: "Cross-platform mobile apps with a seamless user experience.",
    },
    {
        id: 3,
        icon: <FaCloud />,
        title: "Cloud Solutions",
        description: "Scalable and secure cloud computing solutions for businesses.",
    },
    {
        id: 4,
        icon: <FaRocket />,
        title: "Performance Optimization",
        description: "Boost your website’s speed and efficiency with expert techniques.",
    },
];

const Services = () => {
    return (
        <section className="services">
            <motion.h2
                className="services-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Our Services
            </motion.h2>

            <div className="services-container">
                {services.map((service, index) => (
                    <motion.div
                        className="service-card"
                        key={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
