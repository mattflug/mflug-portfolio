import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Portfolio />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
