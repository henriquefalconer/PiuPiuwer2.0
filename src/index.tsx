import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';
import AppProvider from './hooks';

const Index: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#202020' }}>
      <AppProvider>
        <StatusBar style='light' />
        <Routes />
      </AppProvider>
    </SafeAreaView>
  );
}

export default Index;