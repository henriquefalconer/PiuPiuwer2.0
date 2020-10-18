import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import Search from '../pages/Search';
import Profile from '../pages/Profile';

import TabBarIcon from '../components/TabBarIcon';

const { Navigator, Screen } = createBottomTabNavigator();

const TabsRoutes: React.FC = () => {
    return (
        <Navigator
            initialRouteName='Feed'
            tabBarOptions={{
                style: {
                    backgroundColor: '#303030',
                    borderTopWidth: 1,
                    borderTopColor: '#505050'
                },
                showLabel: false,
                activeTintColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: props => (
                    <TabBarIcon {...props} route={route} />
                )
            })}
        >
            <Screen name='Feed' component={Feed} />
            <Screen name='Search' component={Search} />
            <Screen name='Profile' component={Profile} />
        </Navigator>
    );
}

export default TabsRoutes;