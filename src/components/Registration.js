import { useState, useContext } from "react";
import { RegistrationContext } from "../context/RegistrationContext";
import "./styles/Registration.css"; // Import CSS

const Registration = () => {
    const { addRegistration } = useContext(RegistrationContext);
    
    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        city: "",
        phone: "",
        email: "",
        product: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            addRegistration(formData);
            setIsSubmitting(false);
            setIsRegistered(true);
            setFormData({ name: "", role: "", city: "", phone: "", email: "", product: "" });

            // Hide confirmation message after 3 seconds
            setTimeout(() => setIsRegistered(false), 3000);
        }, 2000); // Simulate a 2-second delay
    };

    return (
        <div className="registration-container">
            <div className="form-wrapper">
                <h2 className="text-center text-success mb-4">Register as a Farmer or Retailer</h2>

                {isSubmitting && <p className="loading-message">Processing your registration, please wait...</p>}
                {isRegistered && <p className="success-message">🎉 Registered Successfully!</p>}

                <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow">
                    <div className="mb-3">
                        <label className="form-label fw-bold">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Enter your name"
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Role</label>
                        <select 
                            className="form-select" 
                            name="role" 
                            value={formData.role} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="Farmer">Farmer</option>
                            <option value="Retailer">Retailer</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="city" 
                            value={formData.city} 
                            onChange={handleChange} 
                            placeholder="Enter your city"
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Phone Number</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            placeholder="Enter phone number"
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Enter email"
                            required 
                        />
                    </div>

                    {/* Show Product field if Role is Retailer */}
                    {formData.role === "Retailer" && (
                        <div className="mb-3">
                            <label className="form-label fw-bold">Products You Sell</label>
                            <textarea
                                className="form-control"
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                placeholder="E.g., Fruits, vegetables, grains, dairy products, spices, tea, coffee, etc."
                                rows="3"
                                required
                            />
                        </div>
                    )}

                    <button type="submit" className="btn btn-success w-100" disabled={isSubmitting}>
                        {isSubmitting ? "Registering..." : "Register Now"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
