import { useState, useContext } from "react";
import { RegistrationContext } from "../context/RegistrationContext";

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

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addRegistration(formData);
        setFormData({ name: "", role: "", city: "", phone: "", email: "", product: "" });
      
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center text-success mb-4">Register as a Farmer or Retailer</h2>
            
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
                            placeholder="E.g., Fruits, vegetables, grains (rice, wheat), pulses, spices, dairy products (milk, yogurt), oilseeds (groundnut, mustard), sugar, tea, coffee, etc."
                            rows="3"
                            required
                        />
                    </div>
                )}

                <button type="submit" className="btn btn-success w-100">Register Now</button>
            </form>
        </div>
    );
};

export default Registration;
