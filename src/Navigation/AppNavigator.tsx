import React from 'react';

import Stacks from './Stacks';
import { NavigationContainer } from '@react-navigation/native';
import { lightTheme, darkTheme, useThemeContext } from '@themes';
import DrawerMenu from './DrawerMenu';

const AppNavigator = () => {
  const theme = useThemeContext();
  return (
    <NavigationContainer
      theme={theme.mode === 'dark' ? darkTheme : lightTheme}
    >
      <DrawerMenu />
    </NavigationContainer>
  );
};

export default AppNavigator;
