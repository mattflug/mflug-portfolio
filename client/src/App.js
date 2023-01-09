import "./App.css";
import Header from "./components/Header";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Logos from "./components/Logos";
function App() {
  return (
    <>
      <Header />
      <div className="content-display">
      <Content1 />
      <Content2 />
      </div>
      <Logos />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
