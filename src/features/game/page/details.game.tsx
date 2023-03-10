import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../../user/hooks/useUser';
import { Games } from '../models/games';
import { GameRepository } from '../services/game.repository';
import styles from './details.module.css';

export function DetailsGames() {
    const initialState = {
        title: '',
        images: '',
        description: '',
        gameUrl: '',
        creator: '',
        genre: '',
        userFav: '',
    };
    const [details, setDetails] = useState(initialState);
    const { handleAddFav } = useUsers();
    const { id } = useParams();
    const gameRepo = new GameRepository();

    const getGame = async (id: string) => {
        const game = await gameRepo.get(id);

        setDetails(game);
    };

    useEffect(() => {
        getGame(id as string);
    }, [id]);
    if (details === undefined) return <p>loading</p>;
    return (
        <>
            <main>
                <section className={styles.details}>
                    <h1 className={styles.details__title}>{details.title}</h1>
                    <button
                        className={styles.details__button}
                        onClick={() => {
                            handleAddFav(id as string);
                            //Swal.fire('Añadido a favoritos!');
                        }}
                    >
                        AddFav
                    </button>
                    <a href={details.gameUrl}>
                        <img
                            className={styles.details__img}
                            src={details.images}
                            alt={'Image of ' + details.title}
                            height="200"
                        />
                    </a>

                    <section className={styles.details__descrip}>
                        {details.description}
                    </section>

                    {/* <div className={styles.details__gnre}>
                        {' '}
                        GENERO:{details.genre}
                    </div> */}
                </section>
            </main>
        </>
    );
}
