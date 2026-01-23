import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
