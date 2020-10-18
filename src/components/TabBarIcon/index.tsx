import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import AllIcons from '../AllIcons';

import IconType from '../../utils/IconType';

interface TabBarIconProps {
    focused: boolean;
    color: string;
    size: number;
    route: RouteProp<Record<string, object | undefined>, string>;
}

type AppTab = 'Feed' | 'Search' | 'Profile';

const TabBarIcon: React.FC<TabBarIconProps> = ({ route, ...rest }) => {

    const iconType = {
        'Feed': IconType.Entypo,
        'Search': IconType.Ionicons,
        'Profile': IconType.Ionicons
    }[route.name as AppTab];

    const iconName = {
        'Feed': 'home',
        'Search': 'ios-search',
        'Profile': 'md-person'
    }[route.name as AppTab];

    return (
        <View
            style={{
                justifyContent: 'center'
            }}
        >
            <AllIcons
                iconType={iconType}
                iconName={iconName}
                {...rest}
            />
        </View>
    );
}

export default TabBarIcon;