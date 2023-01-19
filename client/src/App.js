import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
