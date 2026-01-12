import "../assets/css/page.css";
import { useState, useEffect } from "react";
import demo1 from "../assets/images/demo1.jpg";
import demo2 from "../assets/images/demo2.jpg";
import demo3 from "../assets/images/demo3.jpg";
import demo4 from "../assets/images/demo4.jpg";
import demo5 from "../assets/images/demo5.jpg";
import demo6 from "../assets/images/demo6.jpg";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        console.log("Dữ liệu nhận được:", data);
      });
  }, []);

  return (
    <>
      {posts.map((item) => (
        <section className="posts" key={item.id}>
          {/* Avatar user ở góc trên bên trái */}
          <article className="user">
            <i className="fa-regular fa-user"></i>
          </article>

          {/* Nội dung chính của bài đăng */}
          <section className="posts-content">
            {/* Thông tin user và nội dung bài đăng */}
            <article className="user-infor">
              <span>
                <h3>{item.name}</h3> đã đăng lên vào<p>11/11/2024</p>{" "}
              </span>
              <span>razorbill đỉnh vãi l , mấy con gà biết gì</span>
            </article>
            
            {/* Hình ảnh đã upload */}
            <article className="images-uploaded">
              <div className="images-uploaded-item">
                <img src={demo6} alt="anh-demo" className="" />
              </div>
              <div className="images-uploaded-item">
                <img src={demo2} alt="anh-demo" className="" />
              </div>
              <div className="images-uploaded-item">
                <img src={demo5} alt="anh-demo" className="" />
              </div>
              <div className="images-uploaded-item">
                <img src={demo3} alt="anh-demo" className="" />
              </div>
              <div className="images-uploaded-item">
                <img src={demo1} alt="anh-demo" className="" />
              </div>
              <div className="images-uploaded-item">
                <img src={demo4} alt="anh-demo" className="" />
              </div>
            </article>

            {/* Các thao tác interactive (tim, comment, ...) nằm dưới hình ảnh */}
            <article className="interactive">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-comment-dots"></i>
              <i className="fa-solid fa-retweet"></i>
              <i className="fa-solid fa-share-from-square"></i>
            </article>
          </section>
        </section>
      ))}
    </>
  );
}

export default Posts;
