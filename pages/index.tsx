import type { NextPage } from "next";
import { useState } from "react";
import { Navbar, Footer } from "../components";
import { Home, Projects, Skills, Contact } from "../sections";

const App: NextPage = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div>
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <Home setActiveNav={setActiveNav} />
      <Skills />
      <Projects />
      <Contact />
      <Footer setActiveNav={setActiveNav} />
    </div>
  );
};

export default App;
