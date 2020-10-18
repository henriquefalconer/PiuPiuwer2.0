import CompleteUserData from '../interfaces/CompleteUserData';
import UserData from '../interfaces/UserData';

const reduceCompleteUserData = ({ 
    pius,
    favoritos,
    seguindo,
    seguidores,
    ...rest
}: CompleteUserData) => ({ ...rest } as UserData);

export default reduceCompleteUserData;