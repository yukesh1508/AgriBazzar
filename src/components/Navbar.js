import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">Agri-Connect</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">Feedback</Link>  {/* New Feedback Link */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
