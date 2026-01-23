import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>My App</h1>

        <ul className={styles.menu}>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
