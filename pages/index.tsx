import type { NextPage } from "next";
import { Navbar, Footer } from "../components";
import { Home, Projects, Skills, Contact } from "../sections";

const App: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
