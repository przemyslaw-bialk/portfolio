import { useParams } from "react-router-dom";
import { articlesMap } from "../data/articles";

const Article = () => {
  const { title } = useParams();

  const Component = title ? articlesMap[title] : null;

  if (!Component) return <p>article no found ;(</p>;

  return <Component />;
};

export default Article;
