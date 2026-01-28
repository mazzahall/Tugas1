import { useState } from "react";
import "./TableNama.css";

function App() {
  const [nama, setNama] = useState("");
  const [listNama, setListNama] = useState([]);

  const handleTambah = () => {
    if (nama === "") return;
    setListNama([...listNama, nama]);
    setNama("");
  };

return (
  <div>
    <div className="input-group">
      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Masukkan nama"
      />
    </div>

    <div className="button-group">
      <button onClick={handleTambah}>Tambah</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
        </tr>
      </thead>
      <tbody>
        {listNama.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default App;
