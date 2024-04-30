import { useState } from "react";
import "./App.css";
import { Header } from "@/components/header/Header";
import { Description } from "./components/description/Description";
import { Project } from "./components/projects/Project";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main-container">
      <Header />
      <div className="content-container">
        <Description />
        <Project />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
