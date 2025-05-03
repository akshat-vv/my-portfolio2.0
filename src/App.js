import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Import components
import { Header } from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import information from "./constants/global";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Add all icons to the library
library.add(fab, fas);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll position for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollTop(position > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Sending your information..."
      >
        <Header info={information} />
        <Skills info={information} />
        <Work info={information} />
        <Project info={information} />
        <Contact setIsLoading={setIsLoading} info={information} />
        <Footer />
      
      </LoadingOverlay>
    </div>
  );
}

export default App;
