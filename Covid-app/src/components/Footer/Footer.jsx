import styles from "./Footer.module.css";

function Footer(){
    /**
     * menggunakan style yang sudah di import   
     * memanggilnya menggunakan expresion
     */
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div>
                <h2 className={styles.footer__title}>Covid App</h2>
                <p className={styles.footer__author}>Create by Lurking Choco</p>
                </div>
                <div>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>Global</li>   
                        <li className={styles.footer__item}>Indonesia</li>   
                        <li className={styles.footer__item}>Provinsi</li>   
                        <li className={styles.footer__item}>About</li>  
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer