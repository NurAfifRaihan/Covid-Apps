import styles from './Provinsi.module.css';
import Provin from '../Provin/Provin';


function Provinsi (props) {
    const {prov} = props;

    return (
        <div className={styles.tableContainer}>
            <h1>Provinsi</h1>
            <h3>Data Covid Berdasarkan Provinsi</h3>
            <table className={styles.provinsi}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    {prov.map((item, index) => (
                        <Provin
                            key={index}
                            nomor={index + 1}
                            kota={item.kota}
                            kasus={item.kasus}
                            sembuh={item.sembuh}
                            dirawat={item.dirawat}
                            meninggal={item.meninggal}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Provinsi;  
