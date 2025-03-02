import React from 'react';
import './styles/About.css';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="text-center fw-bold">About Agri-Connect</h1>
            <p className="lead text-center text-muted">Bridging the gap between farmers and businesses for a sustainable agricultural future.</p>

            {/* Introduction Section */}
            <section className="about-intro">
                <h2>🌱 Our Vision</h2>
                <p>
                    Agri-Connect is committed to revolutionizing the agricultural supply chain by eliminating intermediaries. 
                    Our goal is to empower <strong>farmers</strong> by giving them direct access to buyers, ensuring <strong>fair pricing, transparency, and efficiency</strong> in trade.
                </p>
            </section>

            {/* How It Works */}
            <section className="about-section">
                <h2>🔗 How Agri-Connect Works</h2>
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item">Farmers and retailers register on the platform.</li>
                    <li className="list-group-item">Farmers list their products, including price, quality, and quantity.</li>
                    <li className="list-group-item">Businesses browse available products and connect with farmers.</li>
                    <li className="list-group-item">Negotiations happen directly without intermediaries.</li>
                    <li className="list-group-item">Secure transactions and logistics support ensure smooth delivery.</li>
                </ol>
            </section>

            {/* Features Section */}
            <section className="about-section about-features">
                <h2>🚜 Key Features</h2>
                <ul>
                    <li>✅ <strong>Direct Trade</strong> – Farmers and businesses interact without middlemen.</li>
                    <li>✅ <strong>Secure Payments</strong> – Safe and reliable transactions.</li>
                    <li>✅ <strong>Quality Assurance</strong> – Transparency in product listings and fair trade.</li>
                    <li>✅ <strong>Multilingual Support</strong> – Available in multiple languages for global accessibility.</li>
                    <li>✅ <strong>Logistics Integration</strong> – Hassle-free shipping and delivery options.</li>
                    <li>✅ <strong>Admin-Controlled Marketplace</strong> – Only the admin can modify or remove data to maintain integrity.</li>
                </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="about-section">
                <h2>🌍 Why Choose Agri-Connect?</h2>
                <p>
                    Unlike traditional markets, Agri-Connect eliminates the <strong>extra costs</strong> associated with intermediaries, 
                    giving farmers more <strong>control over their pricing</strong> and allowing businesses to <strong>source fresh produce efficiently</strong>.
                </p>
                <ul>
                    <li>💰 <strong>Fair Pricing for Farmers</strong></li>
                    <li>🚛 <strong>Fast & Reliable Shipping</strong></li>
                    <li>📞 <strong>Direct Communication Between Farmers & Buyers</strong></li>
                    <li>📈 <strong>Growth Opportunities for Small-Scale Farmers</strong></li>
                </ul>
            </section>

            {/* FAQ Section */}
            <section className="about-section">
                <h2>❓ Frequently Asked Questions (FAQ)</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                Is Agri-Connect free to use?
                            </button>
                        </h2>
                        <div id="faq1" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                Yes! Registration and listing your products are completely <strong>free</strong>.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                How do I contact a farmer or buyer?
                            </button>
                        </h2>
                        <div id="faq2" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                You can directly <strong>message</strong> farmers or buyers through the contact details available in listings.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                Does Agri-Connect support international trade?
                            </button>
                        </h2>
                        <div id="faq3" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Yes! Our platform is designed to support <strong>both local and international agricultural trade</strong>.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta">
                <h2>🚀 Join Agri-Connect Today!</h2>
                <p>Be part of a <strong>transparent, efficient, and fair</strong> agricultural marketplace.</p>
               <Link to="/register" className="btn btn-success btn-lg mt-3 fw-bold hover-glow">Register Now</Link>
            </section>
        </div>
    );
};

export default About;
