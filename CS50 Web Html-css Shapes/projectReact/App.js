/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import ManoKomponentas from './project/components/testComponent';
import HeaderDiv from './project/components/headerComponent';
import FooterDiv from './project/components/footerComponent';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EStyleSheet from 'react-native-extended-stylesheet';


const App = () => {
  return (
    <>
      <HeaderDiv headerText="TestHeader"/>
      <ManoKomponentas tekstas="Test Clicker" />
      <FooterDiv footerText="Test Footer"/>
    </>
  );
};

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});

export default App;
