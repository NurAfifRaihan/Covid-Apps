import { useEffect, useState } from 'react';
import Indo from '../Dataindo/Dataindo.module';

function Dataindo() {
    const [provData, setProvData] = useState([]);

    useEffect(() => {
        fetch('https://covid-fe-2023.vercel.app/api/indonesia.json')
            .then(response => response.json())
            .then(data => {
                if (data && data.regions) {
                    setProvData(data.regions);
                } else {
                    console.error('Data tidak ditemukan');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Indo>
            <div className="tableContainer">
                <h1>Provinsi</h1>
                <h3>Total kasus Covid 19</h3>
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
                        {provData.length > 0 ? (
                            provData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.numbers.confirmed}</td>
                                    <td>{item.numbers.recovered}</td>
                                    <td>{item.numbers.treatment}</td>
                                    <td>{item.numbers.death}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Indo>
    );
}

export default Dataindo;
