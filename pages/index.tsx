import type { NextPage } from "next";
import { Navbar, Footer } from "../components";
import { Home, Project, Skills, Contact } from "../sections";

const App: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
