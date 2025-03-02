const Feedback = () => {
    return (
        <div className="container mt-4 text-center">
            <h2 className="text-success">We Value Your Feedback! 🌱</h2>
            <p className="lead">Your feedback helps us improve Agri-Connect. Please share your thoughts with us.</p>
            
            <a 
                href="https://forms.gle/JormcfD8erqed8kN9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success"
            >
                Give Feedback
            </a>
        </div>
    );
};

export default Feedback;
