import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { 
    Ionicons, 
    FontAwesome, 
    MaterialIcons, 
    MaterialCommunityIcons, 
    Octicons,
    Entypo
} from '@expo/vector-icons';

import IconType from '../../utils/IconType';

export interface AllIconsProps {
    iconType?: IconType;
    iconName: string; 
    size: number; 
    color?: string; 
    style?: StyleProp<TextStyle>;
}

const AllIcons: React.FC<AllIconsProps> = ({ iconType, iconName, size, color, style }) => {

    switch (iconType) {
        case IconType.Ionicons:
            return <Ionicons style={style} name={iconName} size={size} color={color} />;
        case IconType.FontAwesome:
            return <FontAwesome style={style} name={iconName} size={size} color={color} />;
        case IconType.MaterialIcons:
            return <MaterialIcons style={style} name={iconName} size={size} color={color} />;
        case IconType.MaterialCommunityIcons:
            return <MaterialCommunityIcons style={style} name={iconName} size={size} color={color} />;
        case IconType.Octicons:
            return <Octicons style={style} name={iconName} size={size} color={color} />;
        case IconType.Entypo:
            return <Entypo style={style} name={iconName} size={size} color={color} />;
        default:
            return <></>;
    }
};

export default AllIcons;