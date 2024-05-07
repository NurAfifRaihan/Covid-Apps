import styles from "./Main.module.css"

function Main(){
    return(
        <div className={styles.container}>
            <section className={styles.main}>
                <div className={styles.main__left}>
                    <h2 className={styles.main__title}>Covid ID</h2>
                    <h3 className={styles.main__genre}></h3>
                    <p className={styles.main__description}>Transformers adalah serangkaian film aksi fiksi ilmiah berdasarkan franchise Transformers yang disutradarai Michael Bay dari lima film aksi langsung pertama: Transformers, Revenge of the Fallen, Dark of the Moon, Age of Extinction, dan The Last Knight, dan telah berperan sebagai produser untuk film berikutnya. </p>
                    <button className={styles.main__button}>Vaccine</button>
                </div>
                <div className={styles.main__right}>
                    <img className={styles.main__image} src="/img/dokter.jpg" alt="placeholder" />
                </div>
            </section>
        </div>
    )
}

export default Main