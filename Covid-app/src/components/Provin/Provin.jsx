
import styles from "./Provin.module.css";

function Provin(props) {
    const { nomor, kota, kasus, sembuh, meninggal, dirawat } = props;

    return (
        <tr className={styles.row}>
            <td>{nomor}</td>
            <td>{kota}</td>
            <td>{kasus}</td>
            <td>{sembuh}</td>
            <td>{dirawat}</td>
            <td>{meninggal}</td>
        </tr>
    )
}

export default Provin;
