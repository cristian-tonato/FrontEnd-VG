import { Link } from 'react-router-dom';

import { Games } from '../../models/games';
import { GamesItem } from '../game.item/games.item';
import styles from './game.list.module.css';

export function GamesList({ item }: { item: Array<Games> }) {
    return (
        <div>
            <ul className={styles.games_item}>
                {item.map((item: Games) => (
                    <li key={item.id}>
                        <Link to={'/details/' + item.id} key={item.id}>
                            <GamesItem item={item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
