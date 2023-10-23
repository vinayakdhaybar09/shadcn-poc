import Navbar from "../custom/Navbar";
import Hero from "../custom/Hero";
import Services from "../custom/Services";
import Contact from "../custom/Contact";
import About from "../custom/About";
import Partners from "../custom/Partners";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners/>
      <Contact />
    </div>
  );
};

export default Home;
