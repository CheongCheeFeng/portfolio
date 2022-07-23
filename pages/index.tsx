import type { NextPage } from "next";
import { Navbar } from "../components";
import { Home, Work, Skills, Contact } from "../sections";

const App: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
