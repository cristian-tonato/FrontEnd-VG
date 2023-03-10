import { Link } from 'react-router-dom';
import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__div}>
                <div className={styles.footer__logo}>
                    <Link to={''}>
                        <img
                            className={styles.footer__img}
                            src="./assets/logo.png"
                            alt=""
                        />
                    </Link>
                </div>
                <address>Cristian Tonato</address>
            </div>
        </footer>
    );
}
