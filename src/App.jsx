import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";

function App() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const openZoom = (url, title = "") => {
    setZoomedImage({ url, title });
  };

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About onImageClick={openZoom} />
      <Menu onImageClick={openZoom} />
      <Gallery onImageClick={openZoom} />
      <MapSection />
      <Footer />
      
      <ImageModal 
        isOpen={!!zoomedImage} 
        image={zoomedImage} 
        onClose={() => setZoomedImage(null)} 
      />
    </main>
  );
}

export default App;
