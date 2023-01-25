import "./App.css";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header/>
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
