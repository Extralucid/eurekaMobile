import McText from '@components/McText/McText';
import ScalableScreen from '@navigation/ScalableScreen';
import React from 'react';
import { Switch, Text, View } from 'react-native';
import { useThemeContext } from '@themes';

const Settings = ({ animatedStyle, theme }) => {
  const themeContext = useThemeContext();

  return (
    <ScalableScreen>
      <McText bold size={24} color={theme.colors.text1}>
        Settings Scrreen
      </McText>
      <View style={{
        marginTop: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <McText size={16} color={theme.colors.text1}>Light</McText>
        <Switch
          value={themeContext.mode === 'dark'}
          onValueChange={(value) => {
            themeContext.setMode(value ? 'dark' : 'light');
          }}>
        </Switch>
        <McText size={16} color={theme.colors.text1} style={{
            marginLeft: 10,
          }}>Dark</McText>
      </View>
    </ScalableScreen>
  );
};

export default Settings;
