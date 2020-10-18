import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AllIcons, { AllIconsProps } from '../AllIcons';

import { 
  ActionContainer, 
  IconContainer, 
  ActionCount, 
  ActionContainerProps, 
  IconContainerProps, 
  ActionCountProps 
} from './styles';

interface PiuActionProps extends 
  AllIconsProps, 
  ActionContainerProps, 
  IconContainerProps,
  ActionCountProps 
{
  actionCount?: number;
  onPress(): void;
}

const PiuAction: React.FC<PiuActionProps> = ({
  actionCount,
  active,
  onPress,
  verticalIconDisplacement = 0,
  horizontalIconDisplacement = 0,
  noMargin = false,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ActionContainer noMargin={noMargin} >
        <IconContainer
          verticalIconDisplacement={verticalIconDisplacement}
          horizontalIconDisplacement={horizontalIconDisplacement}
        >
          <AllIcons
            {...rest}
            color={active ? 'white' : '#888'}
          />
        </IconContainer>
        {
          actionCount != undefined && (
            <ActionCount active={active} >
              {actionCount}
            </ActionCount>
          )
        }
      </ActionContainer>
    </TouchableOpacity>
  );
}

export default PiuAction;