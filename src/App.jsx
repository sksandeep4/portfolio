import "./index.css";
import Header from "/src/Components/Header/Header.jsx";
import Footer from "/src/Components/Footer/Footer.jsx";
import Hero from "/src/Components/Hero/Hero.jsx";
import Services from "/src/Components/Services/Services.jsx";
import Skills from "/src/Components/Skills/Skills.jsx";
import Projects from "/src/Components/Projects/Projects.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
