import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

import PiuData from '../interfaces/PiuData';
import CompleteUserData from '../interfaces/CompleteUserData';

import reduceCompleteUserData from '../utils/reduceCompleteUserData';

interface PiusContextData {
    allPiusData: Array<PiuData>;
    loggedUserData: CompleteUserData;
    loadPius(): Promise<void>;
    loadUserData(username: string): Promise<void>;
    likePiu(id: number): Promise<void>;
    favoritePiu(id: number): Promise<void>;
    deletePiu(id: number): Promise<void>;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({ children }) => {

    const [allPiusData, setAllPiusData] = useState<Array<PiuData>>([] as Array<PiuData>);

    const [loggedUserData, setLoggedUserData] = useState<CompleteUserData>({} as CompleteUserData);

    const loadPius = useCallback(
        async () => {
            const response = await api.get('/pius/');
            setAllPiusData(response.data);
        },
        [api, setAllPiusData]
    );

    const loadUserData = useCallback(
        async (username: string) => {
            const response = await api.get('/usuarios/?search=' + username);

            const user = response.data[0];

            setLoggedUserData(user);

            // localStorage.setItem('@Piupiuwer::user', JSON.stringify(user));
        },
        [api, setLoggedUserData]
    );

    const likePiu = useCallback(
        async (id: number) => {
            let allPiusDataCopy = [...allPiusData];

            let piuData = allPiusDataCopy.filter(piu => piu.id === id)[0];

            piuData.likers = piuData.likers.map(user => user.id).includes(loggedUserData.id)
                ? piuData.likers.filter(user => user.id !== loggedUserData.id)
                : [...piuData.likers, reduceCompleteUserData(loggedUserData)];

            setAllPiusData(allPiusDataCopy);

            try { 
                api.post('/pius/dar-like/', { usuario: loggedUserData.id, piu: id });
            } catch (e) {
                console.log(e);
            }
        },
        [api, loggedUserData, allPiusData, reduceCompleteUserData, setAllPiusData]
    );

    const favoritePiu = useCallback(
        async (id: number) => {
            let allPiusDataCopy = [...allPiusData];

            let piuData = allPiusDataCopy.filter(piu => piu.id === id)[0];

            piuData.favoritado_por = piuData.favoritado_por.map(user => user.id).includes(loggedUserData.id)
                ? piuData.favoritado_por.filter(user => user.id !== loggedUserData.id)
                : [...piuData.favoritado_por, reduceCompleteUserData(loggedUserData)];

            setAllPiusData(allPiusDataCopy);

            try { 
                api.post('/pius/favoritar/', { usuario: loggedUserData.id, piu: id });
            } catch (e) {
                console.log(e);
            }
        },
        [api, loggedUserData, allPiusData, reduceCompleteUserData, setAllPiusData]
    );

    const deletePiu = useCallback(
        async (id: number) => {
            const newAllPiusData = allPiusData.filter(piu => piu.id !== id);

            setAllPiusData(newAllPiusData);

            // await api.delete(`/pius/${id}`);
        },
        [api, allPiusData, setAllPiusData]
    );

    return (
        <PiusContext.Provider
            value={{
                allPiusData,
                loggedUserData,
                loadPius,
                loadUserData,
                likePiu,
                favoritePiu,
                deletePiu
            }}>
            {children}
        </PiusContext.Provider>
    );
};

const usePius = () => useContext(PiusContext);

export default usePius;
