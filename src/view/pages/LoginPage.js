import React from 'react';
import Login from '../components/logins/Login/Login';
import { Footer, Header, Search } from '../components/shared';

const LoginPage = () => {
    return (
        <>
            <Header />
            <Search />
            <Login />
            <Footer />
        </>
    );
};

export default LoginPage;