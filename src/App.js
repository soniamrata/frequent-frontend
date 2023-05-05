import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/RegisterForm";
import Header from './Components/Header.jsx'
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;