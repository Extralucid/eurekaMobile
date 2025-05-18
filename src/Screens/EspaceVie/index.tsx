import ScalableScreen from '@navigation/ScalableScreen';
import React from 'react';
import {Text} from 'react-native';

const EspaceVie = ({animatedStyle}) => {
  //console.log(animatedStyle);

  return (
    <ScalableScreen>
        <Text style={{color: 'bl'}}>
         Espace vie Scrreen
        </Text>
    </ScalableScreen>
  );
};

export default EspaceVie;
