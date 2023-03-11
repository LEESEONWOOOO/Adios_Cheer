import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

function GoogleComponent({ setIsLoggedIn }) {
    function handleLoginSuccess(response) {
        axios.post('http://localhost:3001/auth/google', {
            id_token: response.credential
        }).then((res) => {
            localStorage.setItem('token', res.data.token)
            setIsLoggedIn(true)
        });
    }

    function handleLoginFailure(error) {
        console.log(error);
    }

    return (
        <GoogleOAuthProvider clientId="1085350782267-r6c795f2co2n7qe70lff1f0vqrc4tmge.apps.googleusercontent.com">
            {
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onFailure={handleLoginFailure}
                    scope="profile email"
                    responseType="code"
                    auto_select={true}
                    useOneTap />}
        </GoogleOAuthProvider >
    );
}

export default GoogleComponent;