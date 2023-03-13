import { Link } from 'react-router-dom';
import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_imgLogo}>
                <Link to={''}>
                    <img
                        className={styles.logos_img_footer}
                        src="./assets/logo.png"
                        alt=""
                    />
                </Link>
                <div className={styles.logos}>
                    <div className={styles.logos_footer}>
                        <a href="">
                            <img
                                className={styles.logos_img}
                                src="./assets/descarga.png"
                                alt="twitter"
                            />
                        </a>
                        <a href="">
                            <img
                                className={styles.logos_img}
                                src="./assets/facebook.png"
                                alt="facebook"
                            />
                        </a>
                        <a href="">
                            <img
                                className={styles.logos_img}
                                src="./assets/instagram.png"
                                alt="instagram"
                            />
                        </a>
                        <a href="">
                            <img
                                className={styles.logos_img}
                                src="./assets/youtube.png"
                                alt="youtube"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footer_contact}>
                <nav className={styles.footer_nav}>
                    <a href="" className={styles.contact_title}>
                        Acerca de
                    </a>
                    <a href="" className={styles.contact_title}>
                        Desarrolladores de Juegos
                    </a>
                    <a href="" className={styles.contact_title}>
                        Contacto
                    </a>
                    <a href="" className={styles.contact_title}>
                        Empleo
                    </a>
                    <a href="" className={styles.contact_title}>
                        Terminos y Condiciones
                    </a>
                    <a href="" className={styles.contact_title}>
                        Preferencias
                    </a>
                </nav>
            </div>
        </footer>
    );
}
