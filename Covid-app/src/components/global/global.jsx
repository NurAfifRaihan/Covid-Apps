
import styles from "./global.module.css"

function GlobalCard(props) {
    const { status, total } = props;

    return (
        <div className={`${styles.card} ${styles[status.toLowerCase()]}`}>
          <p>{status}</p>
          <h2>{total}</h2>
        </div>
    )
}

export default GlobalCard
