import "../assets/css/layout.css";

function Overlay({setOnLogin}) {

  return <article className="overlay" 
  onClick={() => setOnLogin(false)}
  
  ></article>;
}

export default Overlay