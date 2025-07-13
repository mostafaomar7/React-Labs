import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: "11px 20px",
      backgroundColor: "#1f1f1f",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div className="logo" style={{ fontWeight: "bold" }}>
        Movie App
      </div>
      <div className="nav-links">
        <Link to="/" style={{ marginRight: "15px", textDecoration: "none", color: "#fff" }}>Movie List</Link>
        <Link to="/watchlist" style={{ marginRight: "15px", textDecoration: "none", color: "#fff" }}>
          Watchlist
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
