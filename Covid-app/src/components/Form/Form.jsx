import { useState } from 'react';
import styles from './Form.module.css';
import { nanoid } from "nanoid"; 

function Form({ prov, setProvinsiData }) {
  const [kota, setKota] = useState('');
  const [status, setStatus] = useState('');
  const [jumlah, setJumlah] = useState('');

  //membuat state error
  const [isFormError, setIsFormError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (kota === '' || status === '' || jumlah === '') {
      setIsFormError(true);
      return;
    }

    // Panggil fungsi handleAddCase dengan objek yang berisi data yang dimasukkan oleh pengguna
    setProvinsiData(prevState => {
      const existingProvinsi = prevState.find(item => item.kota === kota);
      const newJumlah = parseInt(jumlah);
      let updatedProvinsiData = [...prevState];
      
      if (existingProvinsi) {
        updatedProvinsiData = prevState.map(item => {
          if (item.kota === kota) {
            switch (status) {
              case 'kasus':
                return { ...item, kasus: item.kasus + newJumlah };
              case 'sembuh':
                return {
                  ...item,
                  kasus: item.kasus - newJumlah,
                  sembuh: item.sembuh + newJumlah
                };
              case 'meninggal':
                return {
                  ...item,
                  kasus: item.kasus - newJumlah,
                  meninggal: item.meninggal + newJumlah
                };
              case 'dirawat':
                return {
                  ...item,
                  kasus: item.kasus + newJumlah,
                  dirawat: item.dirawat + newJumlah
                };
              default:
                return item;
            }
          }
          return item;
        });
      } else {
        // Add new data if city doesn't exist
        const newProvinsi = {
          kota: kota,
          kasus: status === 'kasus' ? newJumlah : 0,
          dirawat: status === 'dirawat' ? newJumlah : 0,
          sembuh: status === 'sembuh' ? newJumlah : 0,
          meninggal: status === 'meninggal' ? newJumlah : 0,
        };
        updatedProvinsiData.push(newProvinsi);
      }

      return updatedProvinsiData;
    });

    // Reset form state
    setKota('');
    setStatus('');
    setJumlah('');
    setIsFormError(false); // Reset form error state
  };

  return (
    <div className={styles.container}>
    <section className={styles.form}>
    <div className={styles.form__left}>
            <img className={styles.form__image} src="/img/p.svg" alt="placeholder" />
        </div>
        <div className={styles.form__right}>
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
                  {prov.provinces.map((province) => (
                    <option key={nanoid()} value={province.kota}>
                      {province.kota}
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
                {isFormError && <p>Semua field harus diisi</p>}
              </div>
              <button type="submit">Tambah</button>
            </form>
          </div>
          </div>
                
            </section>
        </div>
  );
}

export default Form;
