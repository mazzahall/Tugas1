import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />

      <main className="main">
        {children}
      </main>

      <Footer />
    </div>
  );
}
