import { useState } from "react";
import "./App.css";
import { Header } from "@/components/header/Header";
import { Description } from "./components/description/Description";
import { Project } from "./components/projects/Project";
import { Skills } from "@/components/skills/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main-container">
      <Header />
      <div className="content-container">
        <Description />
        <Project />
        <Skills />
      </div>
    </main>
  );
}

export default App;
