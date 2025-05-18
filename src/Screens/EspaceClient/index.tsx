import ScalableScreen from '@navigation/ScalableScreen';
import React from 'react';
import {Text} from 'react-native';

const EspaceClient = ({animatedStyle}) => {
  //console.log(animatedStyle);

  return (
    <ScalableScreen>
        <Text style={{color: 'bl'}}>
         Espace Client Scrreen
        </Text>
    </ScalableScreen>
  );
};

export default EspaceClient;
