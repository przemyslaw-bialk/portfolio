import { Link, Outlet } from "react-router-dom";
import { articlesMap } from "../data/articles";
import { useState } from "react";

const articles = Object.keys(articlesMap);

const Blog = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  // for mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 950) {
      setShowMenu(false);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <Link to="/">
        <h2
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Blog
        </h2>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        <div>
          <button className="menu" onClick={() => handleMenu()}>
            articles
          </button>
          {showMenu && (
            <ul className={`menu__ul ${showMenu ? "menu__ul--open" : ""}`}>
              {articles.map((title) => (
                <li key={title}>
                  <Link to={`/blog/${title}`} onClick={() => handleLinkClick()}>
                    {title.replaceAll("_", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
