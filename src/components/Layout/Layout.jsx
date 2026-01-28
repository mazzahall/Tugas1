import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AlertButton from "../button/AlertButton";
import TableNama from "../Tablenama/TableNama";
import "./Layout.css";


export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />

      <TableNama />

      <AlertButton text="Alert Button" message="data tidak bisa berubah" />

      <main className="main">
        {children}
      </main>

      <Footer />
    </div>
  );
}
