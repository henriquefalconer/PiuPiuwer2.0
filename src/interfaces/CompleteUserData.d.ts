import PiuData from './PiuData';
import SimpleUserData from './SimpleUserData';
import UserData from './UserData';

interface CompleteUserData extends UserData {
    pius: Array<PiuData>;
    favoritos: Array<PiuData>;
    seguindo: Array<SimpleUserData>;
    seguidores: Array<SimpleUserData>;
}

export default CompleteUserData;