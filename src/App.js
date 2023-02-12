import "./App.css";
import { Header } from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import information from "./constants/global";

function App() {
  return (
    <div className="App">
      <Header info={information} />
      <Skills info={information} />
      <Work info={information} />
    </div>
  );
}

export default App;
