import { Link } from 'react-router-dom';
import styles from './menu.module.css';
export function Menu() {
    const menuOption = [
        { id: '1', path: '/home', label: 'Home' },
        { id: '2', path: '/favorites', label: 'Favorites' },
        { id: '3', path: '/account', label: 'Account' },
        // { id: '4', path: '/favorites', label: 'favorites' },
        // { id: '5', path: '/details', label: 'details' },
    ];
    return (
        <>
            <nav className={styles.menu__nav}>
                <ul className={styles.menu__ul}>
                    {menuOption.map((item) => (
                        <li key={item.id} className={styles.menu__list}>
                            <Link to={item.path} className={styles.menu__link}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
