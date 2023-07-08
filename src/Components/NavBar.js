import { Link } from "react-router-dom";
// import Index.css from "../Pages/";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs">Captain's Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Logs</Link>
      </button>
    </nav>
  );
}