import type { NextPage } from "next";
import { Navbar } from "../components";
import { Home, Work, Skills, Contact } from "../sections";

const App: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
