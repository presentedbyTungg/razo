import "../assets/css/component.css";
import logo from "../assets/images/razo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../pages/login";
function Header({
  login,
  setLogin,
  user,
  setCurrentUser,
  successLogin,
  setSuccessLogin,
}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [onLogin, setOnLogin] = useState(false);
  useEffect(() => {
    console.log("successLogin thay đổi:", successLogin);
  }, [successLogin]);
  return (
    <header>
      <ul className="header-options">
        <img src={logo} alt="Logo" className="toolbar-logo" />

        <li
          onMouseEnter={() => setHoveredItem("home")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
          <span
            className={` text-hover ${hoveredItem === "home" ? "show" : ""}`}
          >
            Home
          </span>
        </li>
        <li
          onMouseEnter={() => setHoveredItem("world")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/world">
            <i className="fa-solid fa-globe"></i>
          </Link>
          <span
            className={` text-hover ${hoveredItem === "world" ? "show" : ""}`}
          >
            World
          </span>
        </li>
        <li
          onMouseEnter={() => setHoveredItem("reel")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/reel">
            <i className="fa-regular fa-circle-play"></i>
          </Link>
          <span
            className={` text-hover ${hoveredItem === "reel" ? "show" : ""}`}
          >
            Reel
          </span>
        </li>
        <li className="invisible"
          onMouseEnter={() => setHoveredItem("search")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="/search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <span
            className={` text-hover ${hoveredItem === "search" ? "show" : ""}`}
          >
            Search
          </span>
        </li>
         <li 
          onMouseEnter={() => setHoveredItem("login")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setOnLogin(true)}
        >
          {successLogin ? (
            <img
              src={user.userImage}
              alt={`avartar của ${user.username}`}
              onMouseEnter={() => setHoveredItem("Đã đăng nhập")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setLogin(false)}
            />
          ) : (
            <i className="fa-regular fa-user show-icon"></i>
          )}

          {/* <span
            className={` text-hover ${hoveredItem === "login" ? "show" : ""}`}
          >
            Login
          </span> */}
        </li>

      </ul>

      <ul className="header-login">
        <li 
          onMouseEnter={() => setHoveredItem("notifications")}
          onMouseLeave={() => setHoveredItem(null)}
         
        >
          <Link to="/">
            <i className="fa-regular fa-bell"></i>
          </Link>
          <span
            className={` text-hover ${
              hoveredItem === "notifications" ? "show" : ""
            }`}
          >
            Notifications
          </span>
        </li>
        <li
          onMouseEnter={() => setHoveredItem("login")}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setOnLogin(true)}
        >
          {successLogin ? (
            <img
              src={user.userImage}
              alt={`avartar của ${user.username}`}
              onMouseEnter={() => setHoveredItem("Đã đăng nhập")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setLogin(false)}
            />
          ) : (
            <i className="fa-regular fa-user"></i>
          )}

          {/* <span
            className={` text-hover ${hoveredItem === "login" ? "show" : ""}`}
          >
            Login
          </span> */}
        </li>

        {/* <li><Link to="/notifications"><i className="fa-regular fa-bell"></i></Link></li> */}
      </ul>
    
    
    
      {onLogin && (
        <Login
          setOnLogin={setOnLogin}
          login={login}
          setLogin={setLogin}
          setCurrentUser={setCurrentUser}
          setSuccessLogin={setSuccessLogin}
        />
      )}

  <section className="header-top-mobile">
        <img src={logo} alt="Logo" />
        <div className="header-top-notification">
          <i className="fa-regular fa-bell"></i>
        </div>
      </section>
   
    </header>
  );
}
export default Header;
