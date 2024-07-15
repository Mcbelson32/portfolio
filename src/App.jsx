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
  
  AOS.init({ 
    offset: 120, 
    delay: 1000, 
    duration: 400, 
    easing: 'ease', 
    once: true, 
    mirror: true, 
    anchorPlacement: 'top-bottom'
   });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading && <LoadingPage />}
      <Header />
      <SmallNave />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
