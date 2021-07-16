import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <View style={{flex: 1}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
