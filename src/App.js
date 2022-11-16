import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ModalAll from "./components/Modal";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Support from "./components/Support";
import Features from "./components/Features";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Features />
      <ModalAll />
      <Support />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
