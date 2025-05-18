
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Store/Store';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ActivityIndicator } from "react-native";

import AppNavigator from "@navigation/AppNavigator";
import Fonts from "@constants/Fonts";
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeManager from '@themes';
import DrawerMenu from '@navigation/DrawerMenu';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <Provider store={store}>
      <ThemeManager>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </ThemeManager>

    </Provider>

  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  corps: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
