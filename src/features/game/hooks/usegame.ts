import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { GameRepository } from '../services/game.repository';
import * as ac from '../reducer/action.creator';

export const useGame = () => {
    const games = useSelector((state: rootState) => state.games);
    console.log('HOOK', games);

    const dispatcher = useDispatch();
    console.log('dispatcher', dispatcher);

    const apiGame = useMemo(() => new GameRepository(), []);
    console.log(apiGame, 'apigame');

    const handleLoad = useEffect(() => {
        apiGame
            .getAll()
            .then((games) => {
                dispatcher(ac.loadActionCreator(games));
            })

            .catch((error: Error) => (error.name, error.message));
    }, [apiGame, dispatcher]);

    return {
        games,
        handleLoad,
    };
};
