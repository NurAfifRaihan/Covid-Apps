import Provin from '../Provin/Provin';
import Tabel from './Provinsi.module';



function Provinsi (props) {
    const {prov} = props;

    return (
        <Tabel>
        <div className="tableContainer">
            <h1>Provinsi</h1>
            <h3>Data Covid Berdasarkan Provinsi</h3>
            <table className="provinsi">
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
        </Tabel>
    );
}

export default Provinsi;  
