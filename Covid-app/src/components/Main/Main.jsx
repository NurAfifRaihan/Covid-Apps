import styles from "./Main.module.css"

function Main(){
    return(
        <div className={styles.container}>
            <section className={styles.main}>
                <div className={styles.main__left}>
                    <h2 className={styles.main__title}>Covid ID</h2>
                    <h3 className={styles.main__genre}>Mentoring Perkembangan Covid</h3>
                    <p className={styles.main__description}>Vaksinasi Covid-19 merupakan salah satu upaya pemerintah Indonesia dalam menangani masalah Covid-19. Vaksinasi Covid-19 bertujuan untuk menciptakan kekebalan kelompok (herd immunity) agar masyarakat menjadi lebih produktif dalam menjalankan aktivitas kesehariannya.</p>
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