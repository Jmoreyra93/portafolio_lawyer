import About from "./components/About";
import Navbar from "./components/Navbar";
import ModalAll from "./components/Modal";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ModalAll />
      <Servicios />
      <Contact />
      <Features />
      <Footer />

    </div>
  );
}

export default App;
