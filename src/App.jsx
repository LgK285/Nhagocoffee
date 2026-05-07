import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <MapSection />
      <Footer />
    </main>
  );
}

export default App;
