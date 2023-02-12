import "./App.css";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/Contact";
import Resume from "./components/pages/Resume";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/mflug-portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
