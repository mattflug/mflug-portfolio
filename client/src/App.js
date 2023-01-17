import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Logos from "./components/Logos";
import { BrowserRouter as Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Header />
      <div className="content-display">
        <Route path="./components/Projects" element={<Projects />} />
      </div>
      <Portfolio />
      <Logos />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
