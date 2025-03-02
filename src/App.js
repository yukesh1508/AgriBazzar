import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationProvider from "./context/RegistrationContext";  
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Registration from "./components/Registration";
import AdminPanel from "./components/AdminPanel";
import Feedback from "./components/Feedback";  // ✅ Import Feedback Component

function App() {
    return (
        <RegistrationProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/feedback" element={<Feedback />} /> {/* ✅ Feedback Route */}
                </Routes>
            </Router>
        </RegistrationProvider>
    );
}

export default App;
