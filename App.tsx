/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Store/Store';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <Provider store={store}>
      <View style={backgroundStyle}>

        <ScrollView
          style={backgroundStyle}>
          <View style={styles.corps}>
            <Text>Bienvenue sur Eureka</Text>
          </View>
        </ScrollView>
      </View>
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
