import { useContext } from "react";
import { RegistrationContext } from "../context/RegistrationContext";
import { Link } from "react-router-dom";

const Home = () => {
    const { registrations } = useContext(RegistrationContext);

    return (
        <div className="container mt-4">
            {/* Hero Section */}
            <div className="hero-section text-center text-black p-5 rounded shadow-lg">
                <h1 className="display-4 fw-bold">🌾 Welcome to Agri-Connect</h1>
                <p className="lead">
                    Connecting <strong>farmers and retailers</strong> directly for a fair, transparent, and profitable trade.
                </p>
                <Link to="/register" className="btn btn-success btn-lg mt-3">Join Now</Link>
            </div>

            {/* Why Choose Us */}
            <section className="my-5 text-center">
                <h2 className="fw-bold">🚀 Why Choose Agri-Connect?</h2>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <i className="bi bi-shop fs-1 text-success"></i>
                        <h4 className="mt-2">Direct Trade</h4>
                        <p>Farmers sell directly to retailers, <strong>eliminating middlemen</strong>.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-cash-coin fs-1 text-success"></i>
                        <h4 className="mt-2">Better Prices</h4>
                        <p>Retailers get fresh produce at <strong>competitive rates</strong>.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-patch-check fs-1 text-success"></i>
                        <h4 className="mt-2">Trust & Transparency</h4>
                        <p>Verified farmers & businesses ensure <strong>quality assurance</strong>.</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works bg-light p-4 rounded my-5">
                <h2 className="fw-bold text-center">📌 How It Works</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-4">
                        <i className="bi bi-person-plus fs-1 text-success"></i>
                        <h5>1️⃣ Register</h5>
                        <p>Sign up as a <strong>farmer</strong> or <strong>retailer</strong> in a few clicks.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-box-seam fs-1 text-success"></i>
                        <h5>2️⃣ List & Connect</h5>
                        <p>Farmers <strong>list their produce</strong>, retailers <strong>connect directly</strong>.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-handshake fs-1 text-success"></i>
                        <h5>3️⃣ Trade & Grow</h5>
                        <p>Negotiate fair prices & build <strong>long-term partnerships</strong>.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="my-5">
                <h2 className="fw-bold text-center">💬 What People Say</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-4">
                        <div className="testimonial-box p-4 shadow-sm rounded">
                            <p>“Agri-Connect changed the way I sell my crops. Now I <strong>earn 30% more!</strong>”</p>
                            <h6 className="fw-bold">Rajesh, Farmer</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-box p-4 shadow-sm rounded">
                            <p>“No middlemen, <strong>fresh produce, and better deals</strong> – exactly what I needed!”</p>
                            <h6 className="fw-bold">Prasath, Retailer</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-box p-4 shadow-sm rounded">
                            <p>“This platform is a game-changer for the <strong>agriculture business</strong>.”</p>
                            <h6 className="fw-bold">Sneha, Business Owner</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-light p-4 rounded my-5">
                <h2 className="fw-bold text-center">❓ FAQs</h2>
                <div className="accordion mt-4" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                How do I register?
                            </button>
                        </h2>
                        <div id="faq1" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                Click <strong>"Join Now"</strong>, fill in your details, and you're ready to go!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                Is registration free?
                            </button>
                        </h2>
                        <div id="faq2" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Yes! <strong>Farmers and retailers can register for free</strong>.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registered Users */}
            <section className="my-5">
                <h2 className="fw-bold text-center">📢 Registered Farmers & Retailers</h2>
                <div className="row text-center mt-4">
                    {registrations.length === 0 ? (
                        <p>No registrations yet. <Link to="/register">Be the first to join!</Link></p>
                    ) : (
                        registrations.map((reg, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card p-3 mb-3 shadow-sm">
                                    <h5>{reg.name} ({reg.role})</h5>
                                    <p>📍 {reg.city}</p>
                                    <p>📞 {reg.phone}</p>
                                    <p>📧 {reg.email}</p>
                                    {reg.role === "Retailer" && reg.product && (
                                        <p>🛍️ <strong>Products:</strong> {reg.product}</p>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-4 bg-dark text-white mt-5">
                <p>© 2025 Agri-Connect | Connecting Farmers & Retailers for a Better Future 🌱</p>
            </footer>
        </div>
    );
};

export default Home;
