import React from 'react';
import { AuthProvider } from './useAuth';
import { LoadingProvider } from './useLoading';
import { PiusProvider } from './usePius';

const AppProvider: React.FC = ({ children }) => {
    return (
        <LoadingProvider>
            <AuthProvider>
                <PiusProvider>
                    {children}
                </PiusProvider>
            </AuthProvider>
        </LoadingProvider>
    );
}

export default AppProvider;