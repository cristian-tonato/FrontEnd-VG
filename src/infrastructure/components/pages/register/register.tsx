import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRespository } from '..//..//..//../features/user/services/userRepository';
import style from './register.module.css';

type formData = {
    name: '';
    email: '';
    password: '';
    repeatPasswd: '';
    lastName: '';
    favorites: [];
};

export function RegisterForm() {
    const userRepository = new UserRespository('');

    const initialState: formData = {
        name: '',
        email: '',
        password: '',
        repeatPasswd: '',
        lastName: '',
        favorites: [],
    };
    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const info = ev.target as HTMLFormElement;
        setFormState({ ...formState, [info.name]: info.value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        await userRepository.register(formState);
    };
    return (
        <>
            <div className={style.container}>
                <h1 className={style.form__tittle}>Register</h1>
                <form
                    onSubmit={handleSubmit}
                    className={style.form}
                    placeholder="form"
                >
                    <input
                        type="text"
                        placeholder="Introduce tu nombre"
                        value={formState.name}
                        name="name"
                        onInput={handleInput}
                        required
                        className={style.form__input}
                    />
                    <input
                        type="email"
                        placeholder="Introduce Email"
                        value={formState.email}
                        name="email"
                        onInput={handleInput}
                        required
                        className={style.form__input}
                    />
                    <input
                        type="password"
                        placeholder="Introduce Contraseña"
                        value={formState.password}
                        name="password"
                        onInput={handleInput}
                        required
                        className={style.form__input}
                    />

                    <button
                        type="submit"
                        className={style['form__input--submit']}
                    >
                        REGISTER
                    </button>
                </form>
                <div className={style.form__info}>
                    <p className={style['form__info--or']}>or</p>
                    <p>
                        don't have an account?{' '}
                        <Link to="/login" className={style.form__loginButton}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
