import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/useUser';
import { User } from '../../../../features/user/models/user';

import style from './login.module.css';

type formData = {
    email: string;
    password: string;
};

export function Login() {
    const { handleLogin, users, handleLogout } = useUsers();

    const initialLoginState: formData = {
        email: '',
        password: '',
    };
    const [formLoginState, setFormState] = useState(initialLoginState);

    const handleLoginInput = (ev: SyntheticEvent) => {
        const loginInfo = ev.target as HTMLFormElement;
        setFormState({ ...formLoginState, [loginInfo.name]: loginInfo.value });
    };

    const handleLoginSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(formLoginState);
        if (users.token) {
            localStorage.setItem('token', users.token);
        }
    };

    return (
        <>
            <div className={style.container_login}>
                <h1 className={style.form__tittle_title}>Login</h1>
                <form onSubmit={handleLoginSubmit} className={style.form}>
                    <input
                        type="text"
                        placeholder="Introduce tu email"
                        value={formLoginState.email}
                        name="email"
                        onInput={handleLoginInput}
                        className={style.form__input}
                    />
                    <input
                        type="password"
                        placeholder="Introduce Contraseña"
                        value={formLoginState.password}
                        name="password"
                        onInput={handleLoginInput}
                        className={style.form__input}
                    />
                    <button
                        name="login"
                        type="submit"
                        className={style['form__input--submit']}
                    >
                        Log In
                    </button>{' '}
                </form>
                <div className={style.form__info}>
                    <p className={style['form__info--or']}>or</p>
                    <p>
                        don't have an account?{' '}
                        <Link
                            to="/register"
                            className={style.form__loginButton}
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
