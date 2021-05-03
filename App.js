
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SignIn from './screens/SignIn';
import { titanic } from './components/BottomTabNavigator'
import Home from './screens/HomePage';
import List from './screens/DonorList';
import Donate from './screens/Donate'

export default class App extends React.Component {
  render() {
    return (
      <Yatch />
    );
  }
}

const change = createSwitchNavigator({
  SignIn: SignIn,
  titanic: titanic
})

const Yatch = createAppContainer(change);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
