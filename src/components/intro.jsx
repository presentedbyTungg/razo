import { useState, useEffect } from "react";
import "../assets/css/component.css";
import Logo from "../assets/images/razo.png";
function Intro() {
  const [intro, setOnIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!intro) {
    return null;
  } 
  return (
    <section className="intro">
      <section className="intro-content">
        <img src={Logo} alt="razo-logo" className="" />
        <h1>razo</h1>
      </section>
    </section>
  );
}

export default Intro;
