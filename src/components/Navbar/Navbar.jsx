import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">My App</h1>

        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
