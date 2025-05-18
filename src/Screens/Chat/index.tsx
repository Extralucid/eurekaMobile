import ScalableScreen from '@navigation/ScalableScreen';
import React from 'react';
import {Text} from 'react-native';

const Chat = ({animatedStyle}) => {
  //console.log(animatedStyle);

  return (
    <ScalableScreen>
        <Text style={{color: 'bl'}}>
         Home Scrreen
        </Text>
    </ScalableScreen>
  );
};

export default Chat;
