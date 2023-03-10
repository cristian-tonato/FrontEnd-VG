import { Link } from 'react-router-dom';
import { Login } from '../login/login';
import { RegisterForm } from '../register/register';
import styles from './account.module.css';
export function AccountPage() {
    return (
        <>
            <div className={styles.link__container}>
                <button className={styles.links__button}>
                    <Link to="/register" className={styles.links__button}>
                        Register
                    </Link>
                </button>
                <button className={styles.links__button}>
                    <Link to="/login" className={styles.links__button}>
                        Sign in
                    </Link>
                </button>
            </div>
        </>
    );
}
