import React, { useMemo, useState } from 'react';

import usePius from '../../hooks/usePius';

import sortPius from '../../utils/sortPius';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Piu from '../../components/Piu';
import NoPius from '../../components/NoPius';
import ExpandingTextInput from '../../components/ExpandingTextInput';

// import { PiusList } from './styles';

const Feed: React.FC = () => {

    const [piuText, setPiuText] = useState('');

    const { allPiusData, loggedUserData } = usePius();

    return (
        <Background>
            <Header goBackActive />
            <ExpandingTextInput
                placeholder="Em que você está pensando?"
                value={piuText}
                onChangeText={newValue => setPiuText(newValue)}
                style={{
                    flex: 1,
                    fontSize: 18,
                    textAlignVertical: 'top',
                    marginLeft: 5,
                    padding: 0,
                    paddingTop: 15,
                    paddingBottom: 5,
                    color: piuText.length > 140 ? '#FF0800' : '#000',
                }}
                autoCapitalize='none'
            />
        </Background>
    )
}

export default Feed;