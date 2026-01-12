import "../assets/css/page.css";
import Overlay from "../components/overlay";
import { useState, useEffect } from "react";

function isAccount(login, account, password , setCurrentUser , setSuccessLogin) {
  const found = login.find(
    (user) => user.account === account && user.password === password
  
  );  
  if (found) {
    alert("Đăng nhập thành công!");
    setCurrentUser(found);
    setSuccessLogin(true) ;
    
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}

function Login({ setOnLogin , login , setLogin , setCurrentUser , setSuccessLogin }) {
  
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:3000/login/get")
      .then((response) => response.json())
      .then((data) => {
        setLogin(data.data);
        console.log("Dữ liệu nhận được:", data);
      });
  }, [setLogin]);

  return (
    <>
      <Overlay setOnLogin={setOnLogin} />
      <section className="login-box" onClick={(e) => e.stopPropagation()}>
        <h2>Login now</h2>
        <form>
          <label htmlFor="email">Account</label>
          <input
            type="email"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button
          type="button"
          onClick={() => isAccount(login, account, password , setCurrentUser , setSuccessLogin)}
        >
          Log in
        </button>

        <span>Bạn quên mật khẩu?</span>
        <span>Bạn chưa có tài khoản?</span>
        <p>Đăng nhập nhanh</p>
        <section className="login-another">
          <article className="login-another-item">
            <i className="fa-brands fa-google"></i>
            <span>Đăng nhập bằng Gmail</span>
          </article>
          <article className="login-another-item">
            <i className="fa-brands fa-facebook"></i>
            <span>Đăng nhập bằng Facebook</span>
          </article>
        </section>
      </section>
    </>
  );
}

export default Login;
