import { useContext } from "react";
import { RegistrationContext } from "../context/RegistrationContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Home.css";

const Home = () => {
    const { registrations } = useContext(RegistrationContext);

    return (
        <div className="container mt-4">
            {/* Hero Section */}
            <div className="hero-section text-center p-5 rounded shadow-lg bg-success text-white hover-scale">
                <h1 className="display-4 fw-bold">🌾 Welcome to Agri-Connect</h1>
                <p className="lead">
                    Connecting <strong>farmers and retailers</strong> directly for fair, transparent, and profitable trade.
                </p>
                <Link to="/register" className="btn btn-light btn-lg mt-3 fw-bold hover-glow">Join Now</Link>
            </div>

            {/* How It Works */}
            <section className="how-it-works bg-light p-4 rounded my-5">
                <h2 className="fw-bold text-center">📌 How It Works</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-4 hover-box">
                        <i className="bi bi-person-plus fs-1 text-success"></i>
                        <h5>1️⃣ Register</h5>
                        <p>Sign up as a <strong>farmer</strong> or <strong>retailer</strong> in a few clicks.</p>
                    </div>
                    <div className="col-md-4 hover-box">
                        <i className="bi bi-box-seam fs-1 text-success"></i>
                        <h5>2️⃣ List & Connect</h5>
                        <p>Farmers <strong>list their produce</strong>, retailers <strong>connect directly</strong>.</p>
                    </div>
                    <div className="col-md-4 hover-box">
                        <i className="bi bi-check-circle fs-1 text-success"></i>
                        <h5>3️⃣ Trade & Grow</h5>
                        <p>Negotiate fair prices & build <strong>long-term partnerships</strong>.</p>
                    </div>
                </div>
            </section>

            {/* Registered Users */}
            <section className="my-5">
                <h2 className="fw-bold text-center text-success">📢 Registered Farmers & Retailers</h2>
                <div className="row text-center mt-4">
                    {registrations.length === 0 ? (
                        <p>No registrations yet. <Link to="/register">Be the first to join!</Link></p>
                    ) : (
                        registrations.map(({ name, role, city, phone, email, product }, index) => (
                            <div key={index} className="col-md-4 col-sm-6">
                                <div className="card p-3 mb-3 shadow border-success info-box hover-effect">
                                    <h5 className="fw-bold text-success">{name} ({role})</h5>
                                    <p>📍 {city}</p>
                                    <p>📞 {phone}</p>
                                    <p>📧 {email}</p>
                                    {role === "Retailer" && product && <p>🛍️ <strong>Products:</strong> {product}</p>}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* Testimonials */}
            <section className="my-5">
                <h2 className="fw-bold text-center">💬 What People Say</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-4">
                        <div className="testimonial-box p-4 shadow-sm rounded hover-box">
                            <p>“Agri-Connect changed the way I sell my crops. Now I <strong>earn 30% more!</strong>”</p>
                            <h6 className="fw-bold">Rajesh, Farmer</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-box p-4 shadow-sm rounded hover-box">
                            <p>“No middlemen, <strong>fresh produce, and better deals</strong> – exactly what I needed!”</p>
                            <h6 className="fw-bold">Prasath, Retailer</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-box p-4 shadow-sm rounded hover-box">
                            <p>“This platform is a game-changer for the <strong>agriculture business</strong>.”</p>
                            <h6 className="fw-bold">Sneha, Business Owner</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section p-4 bg-light rounded shadow-lg my-5">
                <h2 className="fw-bold text-center">❓ Frequently Asked Questions</h2>
                <div className="accordion mt-4" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                📌 What is Agri-Connect?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Agri-Connect is a platform that connects farmers and retailers directly, eliminating middlemen and ensuring fair trade.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                💰 Is there any registration fee?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                No, Agri-Connect is completely free for farmers and retailers.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                🔒 How secure are transactions?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                We ensure all payments are secure and verified buyers are authenticated for safe transactions.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-4 bg-dark text-white mt-5 hover-footer">
                <p>© 2025 Agri-Connect | Empowering Farmers & Retailers 🌱</p>
            </footer>
        </div>
    );
};

export default Home;
