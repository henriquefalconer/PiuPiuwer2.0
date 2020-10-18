import SimpleUserData from './SimpleUserData';

interface UserData extends SimpleUserData {
    first_name: string;
    last_name: string;
    email: string;
    sobre: string;
    foto: string;
}

export default UserData;