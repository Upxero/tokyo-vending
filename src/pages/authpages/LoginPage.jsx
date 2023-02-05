import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import './Auth.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const { login } = useContext(AuthContext);
    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            }, {
                cancelToken: source.token,
            });

            console.log(result.data);

            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
            { loading && <p>Loading...</p> }
            <div className="login-page">
                <form
                    className="login-form"
                    onSubmit={ handleSubmit }
                >
                    <h2 className="margin-top-bottom-zero center-text">LOG IN</h2>
                    <div className="form-inputs">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">Combination of email address and password is incorrect</p>}
                    <button
                        type="submit"
                        className="login-form-btn"
                    >
                        Login
                    </button>
                    <p className="register-text">
                        Don't have an account? <Link to="/sign-up">REGISTER</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default LoginPage;