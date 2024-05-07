import { useState } from 'react';
import styles from './Form.module.css';
import data from '../../utils/constants/provinces';

function Form({ handleAddCase }) {
  const [kota, setKota] = useState('');
  const [status, setStatus] = useState('');
  const [jumlah, setJumlah] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddCase({
      kota: kota, 
      status,
      jumlah: parseInt(jumlah)
    });
    setKota('');
    setStatus('');
    setJumlah('');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Form Input Kasus COVID</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="provinsi">Provinsi:</label>
          <select
            id="provinsi"
            value={kota}
            onChange={(event) => setKota(event.target.value)}
          >
            <option value="">Pilih Provinsi</option>
            {data.provinces.map((item, index) => (
              <option key={index} value={item.kota}>
                {item.kota}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="">Pilih Status</option>
            <option value="kasus">Positif</option>
            <option value="sembuh">Sembuh</option>
            <option value="dirawat">Dirawat</option>
            <option value="meninggal">Meninggal</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="jumlah">Jumlah:</label>
          <input
            type="number"
            id="jumlah"
            value={jumlah}
            onChange={(event) => setJumlah(event.target.value)}
          />
        </div>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default Form;
