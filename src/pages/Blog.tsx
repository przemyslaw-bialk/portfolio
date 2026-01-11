import { Link, Outlet } from "react-router-dom";
import { articlesMap } from "../data/articles";
import { useEffect, useState } from "react";

const articles = Object.keys(articlesMap);

const Blog = () => {
  // show menu when back to desktop from mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setShowMenu(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div>
      <Link to="/">
        <h2>Blog</h2>
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
            menu
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
