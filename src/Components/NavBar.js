import { Link } from "react-router-dom";
// import Index.css from "../Pages/";

export default function NavBar() {
  return (
    <nav>
      <h1>
        {/* <Link to="/logs">Captain's Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Logs</Link>
      </button>
    </nav> */}

<Link to="/logs" className="header-link">Captain's Log</Link>
      </h1>
      <button className="new-btn">
        <Link to="/logs/new" className="header-link">New Log</Link>
      </button>
    </nav>
  );
}