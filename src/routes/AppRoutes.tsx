import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsRoutes from './TabsRoutes';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Tabs' component={TabsRoutes} />
    </Navigator>
  );
}

export default AppRoutes;