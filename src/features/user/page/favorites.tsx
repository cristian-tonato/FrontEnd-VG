import { Link } from 'react-router-dom';
import { Games } from '../../game/models/games';
import { useUsers } from '../hooks/useUser';
import { User } from '../models/user';
import styles from './favorites.module.css';
export function FavoritesGames() {
    const { users, handleDeleteFav } = useUsers();
    return (
        <>
            <div className={styles.title__container_fav}>
                <h1 className={styles.title_fav}>FAVORITES GAMES</h1>
            </div>
            <section>
                {(users.user as User).favorites.length > 0 ? (
                    <ul className={styles.fav__ul}>
                        {(users.user as User).favorites.map((item: Games) => (
                            <li key={item.id + 1} className={styles.fav__list}>
                                <p className={styles.fav__city}>{item.title}</p>
                                <Link to={'/details/' + item.id} key={item.id}>
                                    <img
                                        src={item.images}
                                        alt={'Image of ' + item.title}
                                        height="200"
                                        className={styles.fav__img}
                                    />
                                </Link>
                                <button
                                    className={styles.fav__delete}
                                    onClick={() => handleDeleteFav(item)}
                                >
                                    DeleteFav
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aún no tienes tus lugares favoritos!</p>
                )}
            </section>
        </>
    );
}
