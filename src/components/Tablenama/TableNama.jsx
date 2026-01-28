import { useState } from "react";

function DaftarNama() {
  const [inputValue, setInputValue] = useState("");
  const [listNama, setListNama] = useState([]);

  function handleTambahNama() {
    if (inputValue.trim() === "") return; // cegah data kosong

    setListNama([...listNama, inputValue]);
    setInputValue(""); // reset input
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Masukkan nama"
      />
      <button onClick={handleTambahNama}>Tambah Nama</button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((nama, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DaftarNama;
