import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}>
          <Route path=":title" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
