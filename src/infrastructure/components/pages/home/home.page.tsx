import { Provider } from 'react-redux';
import { GamesList } from '../../../../features/game/components/game.list/games.list';
import { useGame } from '../../../../features/game/hooks/usegame';
import { appStore } from '../../../store/store';
import styles from './home.module.css';

export function HomePage() {
    const { games } = useGame();

    return (
        <>
            <div className={styles.div}>Games</div>
            <GamesList item={games}></GamesList>
        </>
    );
}
