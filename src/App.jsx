import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reasons from "./components/Reasons";

function App() {
  return (
    <>
      <Navbar  />
      <Hero />
      <Reasons />
      <About />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
