import { Route, Routes } from 'react-router-dom';
//import { GameItem } from '../../../features/game/components/game.item/games.item';
import { DetailsGames } from '../../../features/game/page/details.game';
import { FavoritesGames } from '../../../features/user/page/favorites';
import { AccountPage } from '../pages/account/account';

import { HomePage } from '../pages/home/home.page';
import { Login } from '../pages/login/login';
import { RegisterForm } from '../pages/register/register';
import { PrivateRouter } from './private.routes/private.routes';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home">
                <Route index element={<HomePage />}></Route>
            </Route>
            <Route
                path="/register"
                element={<RegisterForm></RegisterForm>}
            ></Route>
            <Route
                path="/account"
                element={<AccountPage></AccountPage>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
                path="/myGames"
                element={
                    <PrivateRouter>
                        <FavoritesGames />
                    </PrivateRouter>
                }
            ></Route>
            <Route path="/details">
                <Route index element={<HomePage />}></Route>
                <Route
                    path=":id"
                    element={
                        <PrivateRouter>
                            <DetailsGames />
                        </PrivateRouter>
                    }
                ></Route>
            </Route>
            <Route
                path="/no-log"
                element={
                    <h1>Debes estar loggeado para ingresar a esta página</h1>
                }
            ></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
