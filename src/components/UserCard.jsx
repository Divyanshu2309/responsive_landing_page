import React, { memo } from "react";
import { motion } from "framer-motion";

const UserCard = memo(({ user }) => {
    return (
        <motion.div
            className="user-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <img
                src={`https://i.pravatar.cc/150?img=${user.id}`} // Dummy user image
                alt={user.name}
                loading="lazy"
                className="user-image"
            />
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
        </motion.div>
    );
});

export default UserCard;
