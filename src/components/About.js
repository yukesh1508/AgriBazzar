import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center fw-bold">About Agri-Connect</h1>
            <p className="lead text-center text-muted">Bridging the gap between farmers and businesses for a sustainable agricultural future.</p>

            {/* Introduction Section */}
            <section className="mt-4">
                <h2>🌱 Our Vision</h2>
                <p>
                    Agri-Connect is committed to revolutionizing the agricultural supply chain by eliminating intermediaries. 
                    Our goal is to empower **farmers** by giving them direct access to buyers, ensuring **fair pricing, transparency, and efficiency** in trade.
                </p>
            </section>

            {/* How It Works */}
            <section className="mt-5 bg-light p-4 rounded">
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
            <section className="mt-5">
                <h2>🚜 Key Features</h2>
                <ul className="list-unstyled">
                    <li>✅ **Direct Trade** – Farmers and businesses interact without middlemen.</li>
                    <li>✅ **Secure Payments** – Safe and reliable transactions.</li>
                    <li>✅ **Quality Assurance** – Transparency in product listings and fair trade.</li>
                    <li>✅ **Multilingual Support** – Available in multiple languages for global accessibility.</li>
                    <li>✅ **Logistics Integration** – Hassle-free shipping and delivery options.</li>
                    <li>✅ **Admin-Controlled Marketplace** – Only the admin can modify or remove data to maintain integrity.</li>
                </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="mt-5 bg-light p-4 rounded">
                <h2>🌍 Why Choose Agri-Connect?</h2>
                <p>
                    Unlike traditional markets, Agri-Connect eliminates the **extra costs** associated with intermediaries, 
                    giving farmers more **control over their pricing** and allowing businesses to **source fresh produce efficiently**.
                </p>
                <ul>
                    <li>💰 **Fair Pricing for Farmers**</li>
                    <li>🚛 **Fast & Reliable Shipping**</li>
                    <li>📞 **Direct Communication Between Farmers & Buyers**</li>
                    <li>📈 **Growth Opportunities for Small-Scale Farmers**</li>
                </ul>
            </section>

            {/* FAQ Section */}
            <section className="mt-5">
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
                                Yes! Registration and listing your products are completely **free**.
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
                                You can directly **message** farmers or buyers through the contact details available in listings.
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
                                Yes! Our platform is designed to support **both local and international agricultural trade**.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="mt-5 text-center">
                <h2>🚀 Join Agri-Connect Today!</h2>
                <p>Be part of a **transparent, efficient, and fair** agricultural marketplace.</p>
                <a href="/register" className="btn btn-success btn-lg">Register Now</a>
            </section>
        </div>
    );
};

export default About;
