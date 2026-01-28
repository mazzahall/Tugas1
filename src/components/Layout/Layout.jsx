import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TableNama from "../Tablenama/TableNama";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />

      <TableNama />

      <main className="main">
        {children}
      </main>

      <Footer />
    </div>
  );
}
