import React, { useCallback, useState, useMemo } from 'react';
import { TextInput, Keyboard } from 'react-native';

import useAuth from '../../hooks/useAuth';
import usePius from '../../hooks/usePius';
import useLoading from '../../hooks/useLoading';

import Background from '../../components/Background';
import Header from '../../components/Header';
import KeyboardResponsiveView from '../../components/KeyboardResponsiveView';
import CentralizedView from '../../components/CentralizedView';
import RoundedButton from '../../components/RoundedButton';

import { 
    AppDescriptionView, 
    AppDescription, 
    LoginInput, 
    ErrorText, 
    ErrorArea 
} from './styles';

const Login: React.FC = () => {
    const [cred, setCred] = useState({
        username: '',
        password: ''
    });

    const [passwordInputRef, setPasswordInputRef] = useState<TextInput | null>(null);

    const { loginError, login } = useAuth();

    const { loadUserData, loadPius } = usePius();

    const { setIsLoading } = useLoading();

    const loginDisabled = useMemo<boolean>(
        () => cred.username.length === 0 || cred.password.length === 0,
        [cred]
    );

    const handleLogin = useCallback(
        async () => {
            Keyboard.dismiss();
            if (!loginDisabled) {
                setIsLoading(true);
                const loggedIn = await login(cred);
                if (loggedIn) {
                    await loadUserData(cred.username);
                    await loadPius();
                }
                setIsLoading(false);
            }
        },
        [loginDisabled, cred, login]
    );

    return (
        <Background style={{ paddingHorizontal: 30}} >
            <KeyboardResponsiveView>
                <Header transparent />
                <CentralizedView>
                    <AppDescriptionView>
                        <AppDescription>Faça parte da rede social mais original que existe.</AppDescription>
                    </AppDescriptionView>
                    <LoginInput
                        placeholder='Usuário'
                        value={cred.username}
                        onChange={e => setCred({ ...cred, username: e.nativeEvent.text })}
                        onSubmitEditing={() => passwordInputRef?.focus()}
                    />
                    <LoginInput
                        ref={e => setPasswordInputRef(e)}
                        placeholder='Senha'
                        value={cred.password}
                        onChange={e => setCred({ ...cred, password: e.nativeEvent.text })}
                        onSubmitEditing={handleLogin}
                        secureTextEntry
                    />
                    <ErrorArea>
                        <ErrorText>{loginError}</ErrorText>
                    </ErrorArea>
                    <RoundedButton
                        text='Login'
                        onPress={handleLogin}
                        disabled={loginDisabled}
                    />
                </CentralizedView>
            </KeyboardResponsiveView>
        </Background>
    )
}

export default Login;