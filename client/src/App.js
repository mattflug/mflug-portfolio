import "./App.css";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Test from "./components/Test"

function App() {
  return (
    <>
      <Router>
        <Test />
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
