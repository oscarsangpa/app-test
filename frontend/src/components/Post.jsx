import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../services/postServices";
import "./components.css";

function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost()
      .then((p) => setPost(p))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/home">Go Home</Link>

      {post &&
        post.map((postMapped) => (
          <section key={postMapped.id}>
            <p>{postMapped.title}</p>
          </section>
        ))}
    </div>
  );
}

export default Post;
