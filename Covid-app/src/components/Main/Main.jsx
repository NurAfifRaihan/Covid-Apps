import StyledMain from "./Main.module"

function Main(){
    return(
        <StyledMain>
        <div className="container">
            <section className="main">
                <div className="main__left">
                    <h2 className="main__title">Covid ID</h2>
                    <h3 className="main__genre">Mentoring Perkembangan Covid</h3>
                    <p className="main__description">Vaksinasi Covid-19 merupakan salah satu upaya pemerintah Indonesia dalam menangani masalah Covid-19. Vaksinasi Covid-19 bertujuan untuk menciptakan kekebalan kelompok (herd immunity) agar masyarakat menjadi lebih produktif dalam menjalankan aktivitas kesehariannya.</p>
                    <button className="main__button">Vaccine</button>
                </div>
                <div className="main__right">
                    <img className="main__image" src="/img/dokter.jpg" alt="placeholder" />
                </div>
            </section>
        </div>
        </StyledMain>
    )
}

export default Main