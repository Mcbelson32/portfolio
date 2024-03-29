import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header";
import SmallNave from "./components/small-nav";
import LoadingPage from "./components/loading";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skill";
import Portfolio from "./pages/portfolio";

function App() {
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
    </>
  );
}

export default App;
