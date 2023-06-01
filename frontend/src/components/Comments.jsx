import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComments } from "../services/commentServices";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments()
      .then((p) => setComments(p))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/home">Go Home</Link>

      {comments &&
        comments.map((commentsMapped) => (
          <section key={commentsMapped.id}>
            <p>{commentsMapped.body}</p>
          </section>
        ))}
    </div>
  );
}

export default Comments;
