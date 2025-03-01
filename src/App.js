import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationProvider from "./context/RegistrationContext";  // ✅ Correct Import
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Registration from "./components/Registration";
import AdminPanel from "./components/AdminPanel";  // ✅ Admin Panel Route

function App() {
    return (
        <RegistrationProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/admin" element={<AdminPanel />} /> {/* ✅ Admin Route */}
                </Routes>
            </Router>
        </RegistrationProvider>
    );
}

export default App;
