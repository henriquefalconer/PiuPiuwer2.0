import React, { useMemo } from 'react';

import usePius from '../../hooks/usePius';

import sortPius from '../../utils/sortPius';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Piu from '../../components/Piu';
import NoPius from '../../components/NoPius';

import { PiusList } from './styles';

const Feed: React.FC = () => {

  const { allPiusData, loggedUserData } = usePius();

  const sortedPiusData = useMemo(
    () => {
      let newAllPiusData = [ ...allPiusData ];
      sortPius(newAllPiusData, loggedUserData.id);
      return newAllPiusData;
    },
    [allPiusData, loggedUserData]
  );

  const piuComponents = useMemo(
    () => [
      ...sortedPiusData.map(
        piu => <Piu key={piu.id} piuData={piu} />
      ),
      ...(
        sortedPiusData.length > 0 
          ? [<NoPius key={-1} />]
          : []
      )
    ],
    [sortedPiusData]
  );

  return (
    <Background>
      <Header />
      <PiusList>
        {piuComponents}
      </PiusList>
    </Background>
  )
}

export default Feed;