import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  button
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const HeaderDiv = ({headerText}) => (
    <>
        <View>
            <Text style={styles.headerDiv}>{headerText}</Text>
        </View>
    </>
)

const styles = EStyleSheet.create({
    headerDiv: {
        fontSize: 30,
        marginTop: 40,
        textAlign: 'center'
    }
})

export default HeaderDiv;