import PiuData from "../interfaces/PiuData";

const sortPius = (pius: Array<PiuData>, loggedUserId: number) => {
    pius.sort((a, b) => Date.parse(b.horario) - Date.parse(a.horario));
    pius.sort((a, b) => (
        (
            b.favoritado_por.map(user => user.id).includes(loggedUserId) ? 1 : 0
        ) - (
            a.favoritado_por.map(user => user.id).includes(loggedUserId) ? 1 : 0
        )
    ));
}

export default sortPius;