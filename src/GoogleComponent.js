import React from 'react';
import { GoogleLogin} from '@react-oauth/google';
import axios from 'axios';

function GoogleComponent(props) {
    function handleLoginSuccess(response) {
        console.log(response);
        axios.post('http://localhost:3001/auth/google', {
            id_token: response.credential
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            props.handleLogin(res.data.user.email);
        });
    }

    function handleLoginFailure(error) {
        console.log(error);
    }

    return (
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                scope="profile email"
                responseType="code"
            />
    );
}

export default GoogleComponent;