import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reasons from "./components/Reasons";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar  />
      <Hero />
      <Reasons />
      <About />
      <Works /> 
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
