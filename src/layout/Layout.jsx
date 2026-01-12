import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../assets/css/layout.css";
import Header from "../components/Header.jsx";
import Toolbar from "../components/Toolbar.jsx";
import Intro from "../components/intro.jsx";


function Layout() {
  const [login, setLogin] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [successLogin, setSuccessLogin] = useState(false);
  return (
    <>
      <Intro />
    
      <section className="container">
        <Toolbar />
        <Header
          login={login}
          setLogin={setLogin}
          user={currentUser}
          setCurrentUser={setCurrentUser}
          successLogin={successLogin}
          setSuccessLogin={setSuccessLogin}
        />
        <main>
          <section className="page-content">
            <Outlet />
          </section>
        </main>
      </section>
    </>
  );
}

export default Layout;
