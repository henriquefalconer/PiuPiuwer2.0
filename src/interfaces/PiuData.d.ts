import UserData from './UserData';

interface PiuData {
    id: number;
    usuario: UserData;
    likers: Array<UserData>;
    favoritado_por: Array<UserData>;
    texto: string;
    horario: string;
}

export default PiuData;