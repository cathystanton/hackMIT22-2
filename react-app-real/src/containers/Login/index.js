import React from 'react';
import { LogButton } from './styles';

const Login = () => {
    return (
        <div>
            <h1>Get Started with MusicNotes</h1>
            <a href="auth/login">
                <LogButton>Login with Spotify</LogButton>
            </a>
        </div>
    );
};

export default Login;