import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import { HomePage } from '../pages/home/home.page';
import styles from './header.module.css';

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header}>
                    <Link to={''}>
                        <img
                            className={styles.header}
                            src="./assets/logo.png"
                            alt=""
                        />
                    </Link>
                </div>
                <Menu></Menu>
            </header>
        </>
    );
}
