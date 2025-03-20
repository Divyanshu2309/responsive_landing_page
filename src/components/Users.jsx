import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";
import UserCard from "./UserCard"; // Importing UserCard component
import "./Users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const userMap = useRef(new Map());
    const debounceTimer = useRef(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();

                setUsers(data);
                setFilteredUsers(data);

                // Store users in HashMap for fast lookup
                const userHashMap = new Map();
                data.forEach((user) => {
                    userHashMap.set(user.name.toLowerCase(), user);
                });
                userMap.current = userHashMap;
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    // Debounced Search Function
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);

        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
            if (query === "") {
                setFilteredUsers(users);
            } else {
                const results = [];
                userMap.current.forEach((user, name) => {
                    if (name.includes(query)) results.push(user);
                });
                setFilteredUsers(results);
            }
        }, 300);
    };

    return (
        <section className="users">
            <motion.h2
                className="users-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                User List
            </motion.h2>

            <input
                type="text"
                className="search-bar"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className="user-container">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </section>
    );
};

export default Users;
