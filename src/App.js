import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import information from "./constants/global";
import Project from "./components/Projects/Project";

function App() {
  return (
    <div className="App">
      <Header info={information} />
      <Skills info={information} />
      <Work info={information} />
      <Project info={information} />
    </div>
  );
}

export default App;
