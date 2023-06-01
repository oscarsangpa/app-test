import { Link } from "react-router-dom";
import "../views/views.css";

function Home() {
  return (
    <main className="home">
      <h1 className="title">What do you want to do?</h1>
      <section className="options">
        <div>
          <Link to="/post">
            <p>List post</p>
          </Link>
        </div>
        <div>
          <p>
            <Link to="/comments">List comments</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
