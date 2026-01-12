import "../assets/css/component.css";

import { useState } from "react";
function Toolbar() {
  const [onToolbar, setOnToolbar] = useState(false);

  return (
    <section
      className={`toolbar  ${onToolbar ? "toolbar-on" : ""}`}
      onMouseEnter={() => setOnToolbar(true)}
      onMouseLeave={() => setOnToolbar(false)}
    >
      <ul className={`"" ${onToolbar ? "toolbar-ul-on" : ""}`}>
        <li>
          <i className="fa-solid fa-plus"></i>
          <div>
            <h2 className={`"" ${onToolbar ? "toolbar-text-on" : ""}`}>
              {" "}
              Tải ảnh lên
            </h2>
          </div>
        </li>
        <li>
          <i className="fa-solid fa-camera"></i>
          <div>
            <h2 className={`"" ${onToolbar ? "toolbar-text-on" : ""}`}>
              {" "}
              Chụp ảnh
            </h2>
          </div>
        </li>
        <li>
          <i className="fa-solid fa-video"></i>
          <div>
            <h2 className={`"" ${onToolbar ? "toolbar-text-on" : ""}`}>
              {" "}
              Quay video
            </h2>
          </div>
        </li>
        <li>
          <i className="fa-solid fa-crop-simple"></i>
          <div>
            <h2 className={`"" ${onToolbar ? "toolbar-text-on" : ""}`}>
              {" "}
              Thiết kế
            </h2>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Toolbar;
