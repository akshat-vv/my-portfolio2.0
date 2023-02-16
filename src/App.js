import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import information from "./constants/global";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoadingOverlay from "react-loading-overlay";

function App() {
  const [isLoading, setIsLoading] = useState(false);

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
        <Contact setIsLoading={setIsLoading} />
        <Footer />
      </LoadingOverlay>
    </div>
  );
}

export default App;
