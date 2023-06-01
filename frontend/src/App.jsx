import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./views/Home";
import Register from "./components/Register";
import Post from "./components/Post";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </>
  );
}

export default App;
