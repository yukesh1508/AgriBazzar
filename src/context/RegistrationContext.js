import { createContext, useState, useEffect } from "react";

// Create Context
export const RegistrationContext = createContext();

// Registration Provider
const RegistrationProvider = ({ children }) => {
    const [registrations, setRegistrations] = useState([]);

    // Load registrations from localStorage on page load
    useEffect(() => {
        const storedRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
        setRegistrations(storedRegistrations);
    }, []);

    // Save to localStorage whenever registrations change
    useEffect(() => {
        localStorage.setItem("registrations", JSON.stringify(registrations));
    }, [registrations]);

    // Add new registration
    const addRegistration = (newRegistration) => {
        const updatedRegistrations = [...registrations, newRegistration];
        setRegistrations(updatedRegistrations);
    };

    // Clear registrations after 24 hours
    useEffect(() => {
        const timer = setTimeout(() => {
            setRegistrations([]);
            localStorage.removeItem("registrations");
        }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <RegistrationContext.Provider value={{ registrations, addRegistration }}>
            {children}
        </RegistrationContext.Provider>
    );
};

// ✅ Correct Export
export default RegistrationProvider;
