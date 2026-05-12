import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Certificate, Contact, Home, Projects } from "./pages";
import CyberScene from "./components/CyberScene";
import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  return (
    <main className="relative min-h-screen crt-overlay bg-[#08080a]">
      <Router>
        <SmoothScroll>
          <CyberScene />
          <div className="relative z-10">
            <Navbar />
            <div className="flex flex-col">
              <Home />
              <About />
              <Projects />
              <Certificate />
              <Contact />
            </div>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </main>
  );
};

export default App;


