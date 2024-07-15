import { useState, useEffect } from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "./components/header";
import SmallNave from "./components/small-nav";
import LoadingPage from "./components/loading";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skill";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";


function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    AOS.init({ 
      offset: 80,
      duration: 1500, 
      easing: 'ease-in-out', 
     });
  }, []);
  return (
    <>
      {isLoading && <LoadingPage />}
      <Header />
      <SmallNave />
      <Home />
      <About />
      <Skills width={windowWidth} />
      <Portfolio />
      <Contact width={windowWidth} />
      <Footer />
    </>
  );
}

export default App;
