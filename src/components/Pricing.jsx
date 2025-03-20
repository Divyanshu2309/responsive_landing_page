import { motion } from "framer-motion";
import "./Pricing.css";

const pricingPlans = [
    {
        id: 1,
        title: "Basic Plan",
        price: "$9.99/month",
        features: ["1 Website", "10GB Storage", "Basic Support"],
    },
    {
        id: 2,
        title: "Pro Plan",
        price: "$19.99/month",
        features: ["5 Websites", "50GB Storage", "Priority Support"],
    },
    {
        id: 3,
        title: "Enterprise Plan",
        price: "$49.99/month",
        features: ["Unlimited Websites", "200GB Storage", "24/7 Support"],
    },
];

const Pricing = () => {
    return (
        <section className="pricing">
            <motion.h2
                className="pricing-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Pricing Plans
            </motion.h2>

            <div className="pricing-container">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        className="pricing-card"
                        key={plan.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="pricing-title">{plan.title}</h3>
                        <p className="pricing-price">{plan.price}</p>
                        <ul className="pricing-features">
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <motion.button
                            className="pricing-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Choose Plan
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
