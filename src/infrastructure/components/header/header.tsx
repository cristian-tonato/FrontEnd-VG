import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import { HomePage } from '../pages/home/home.page';
import styles from './header.module.css';

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to={''}>
                    <img
                        className={styles.header_img}
                        src="./assets/logo.png"
                        alt=""
                    />
                </Link>
                {/* <div className={styles.header__menu}> */}
                <Menu></Menu>
                {/* </div> */}
            </header>
        </>
    );
}
