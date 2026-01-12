import "../assets/css/page.css";
import { useState, useEffect } from "react";
import Posts from "../components/Posts.jsx";
function Home() {
  const [online, setOnline] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setOnline(data.data);
        console.log("Dữ liệu nhận được:", data);
      });
  }, []);

  return (
    <>
      <section className="home-page">
        <section className="home-page-main">
          <section className="user-upload">
            <article className="user">
              <i className="fa-regular fa-user"></i>
            </article>
            <h2>Hôm nay có gì hot ?</h2>
            <i className="fa-solid fa-upload"></i>
          </section>
          <section className="home-posts">
            <Posts />
          </section>
          <section className="home-posts">
            <Posts />
          </section>
          <section className="home-posts">
            <Posts />
          </section>
          <section className="home-posts">
            <Posts />
          </section>
        </section>

        <section className="home-page-sub">
          <section className="home-page-sub-top">
            <article className="home-page-sub-title">
              <h2>Đang hoạt động</h2>
            </article>
            <article className="home-page-sub-content">
              {online.map((online) => (
                <div className="online-box" key={online.id}>
                  <i className="fa-regular fa-user"></i>
                  <span>{online.name}</span>
                </div>
              ))}
            </article>
          </section>
          <section className="home-page-sub-bottom">
            <article className="home-page-sub-title">
              <h2>Nhóm đang hoạt động</h2>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
export default Home;
