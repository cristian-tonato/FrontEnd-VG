import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../../user/hooks/useUser';
import { Games } from '../../models/games';
import styles from './game.item.module.css';

export function GamesItem({ item }: { item: Games }) {
    return (
        <>
            <figure className={styles.container}>
                <h1 className={styles.title}>{item.title} </h1>
                <img
                    className={styles.container__img}
                    src={item.images}
                    alt={'Image of ' + item.title}
                    height="200"
                />
            </figure>
        </>
    );
}
