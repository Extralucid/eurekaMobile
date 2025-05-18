import ScalableScreen from '@navigation/ScalableScreen';
import React from 'react';
import {Text} from 'react-native';

const Help = ({animatedStyle}) => {
  //console.log(animatedStyle);

  return (
    <ScalableScreen>
        <Text style={{color: 'bl'}}>
         Help Scrreen
        </Text>
    </ScalableScreen>
  );
};

export default Help;
