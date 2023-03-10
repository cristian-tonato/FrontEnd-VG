import { Games } from '../../game/models/games';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoUser, User } from '../models/user';
import * as ac from '../reducer/user.action.creator';
import { UserRespository } from '../services/userRepository';

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.user);
    const dispatcher = useDispatch();
    const apiUsers = useMemo(() => new UserRespository(''), []);

    const handleLogin = (user: ProtoUser) => {
        apiUsers.login(user).then((res) => {
            dispatcher(ac.loginActionCreator(res));
        });
    };
    const handleLogout = () => {
        dispatcher(ac.logoutActionCreator());
    };
    const handleAddFav = (id: string) => {
        // if (
        //     (users.user as User).favorites.find(
        //         (item) => item.id.toString() === game.id
        //     )
        // ) {
        //     throw new Error('Bad Request');
        // }
        console.log(id);
        apiUsers.addFav(id).then((data) => {
            dispatcher(ac.addFavActionCreator(data));
        });
    };
    const handleDeleteFav = (games: Games) => {
        apiUsers
            .deleteFav(games.id)
            .then(() => dispatcher(ac.deleteFavActionCreator(games)));
    };
    return {
        users,
        handleLogin,
        handleLogout,
        handleAddFav,
        handleDeleteFav,
    };
};
