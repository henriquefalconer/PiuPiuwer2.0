import React, { createContext, useContext, useState, useCallback } from 'react';
import LoginCred from '../interfaces/LoginCred';

import api from '../services/api';

interface AuthContextData {
    token: string | null;
    loginError: string;
    login({ username, password }: LoginCred): Promise<boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [token, setToken] = useState<string | null>(() => {

        // const user = localStorage.getItem('@Piupiuwer::user');
        // const token = localStorage.getItem('@Piupiuwer::token');

        // if (user && token) {
        //     return { user: JSON.parse(user), token };
        // }

        return null;
    });

    const [loginError, setLoginError] = useState<string>('');

    const login = useCallback(
        async ({ username, password }: LoginCred) => {

            setLoginError('');

            async function _login() {
                try {

                    const response = await api.post('/login/', { username, password });

                    const { token } = response.data;

                    api.defaults.headers.Authorization = `JWT ${token}`;

                    // localStorage.setItem('@Piupiuwer::token', token);

                    !!token && setToken(token);

                } catch (err) {
                    const { data } = err.response;

                    return data?.global === undefined
                        ? 'Falha de conexão'
                        : data.global[0] === 'Impossível fazer login com as credenciais fornecidas.'
                            ? 'Usuário e senha não existem'
                            : 'Erro desconhecido';
                }

                return '';
            }

            const error = await _login();

            setLoginError(error);

            return !error;
        }, 
        [api, setToken, setLoginError]
    );

    return (
        <AuthContext.Provider value={{ token, loginError, login }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
