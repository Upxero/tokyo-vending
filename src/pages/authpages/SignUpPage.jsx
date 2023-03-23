import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Auth.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const source = axios.CancelToken.source();
    const navigate = useNavigate();

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
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email: email,
                password: password,
                username: username,
            }, {
                cancelToken: source.token,
            });

            navigate('/login');
        } catch(e) {
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
                    <h2 className="margin-top-bottom-zero center-text">SIGN UP</h2>
                    <div className="form-inputs">
                        <input
                            type="text"
                            placeholder="Username"
                            className="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="E-mail"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">This account already exists. Please try another email address.</p>}
                    <button type="submit" className="login-form-btn">
                        Sign Up
                    </button>
                    <p className="register-text">
                        Already a user? <Link className="register-link" to="/login">LOGIN</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default SignUpPage;