import type { NextPage } from "next";
import { Navbar } from "../components";
import { Home, Project, Skills, Contact } from "../sections";

const App: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
