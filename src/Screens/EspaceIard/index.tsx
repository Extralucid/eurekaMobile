import ScalableScreen from '@navigation/ScalableScreen';
import React from 'react';
import {Text} from 'react-native';

const EspaceIard = ({animatedStyle}) => {
  //console.log(animatedStyle);

  return (
    <ScalableScreen>
        <Text style={{color: 'bl'}}>
         Espace Iard Scrreen
        </Text>
    </ScalableScreen>
  );
};

export default EspaceIard;
