import StyledFooter from "./Footer.module"

function Footer(){
    /**
     * menggunakan style yang sudah di import   
     * memanggilnya menggunakan expresion
     */
    return(
        <StyledFooter>
        <div className="container">
            <footer className="footer">
                <div>
                <h2 className="footer__title">Covid App</h2>
                <p className="footer__author">Create by Lurking Choco</p>
                </div>
                <div>
                    <ul className="footer__list">
                        <li className="footer__item">Global</li>   
                        <li className="footer__item">Indonesia</li>   
                        <li className="footer__item">Provinsi</li>   
                        <li className="footer__item">About</li>  
                    </ul>
                </div>
            </footer>
        </div>
        </StyledFooter>
    )
}

export default Footer;