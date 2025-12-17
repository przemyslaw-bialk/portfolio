import { Link, Outlet } from "react-router-dom";
import { articlesMap } from "../data/articles";

const articles = Object.keys(articlesMap);

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {articles.map((title) => (
          <li key={title}>
            <Link to={`/blog/${title}`}>{title.replaceAll("_", " ")}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Blog;
