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

const FooterDiv = ({footerText}) => (
    <>
        <View>
            <Text style={styles.headerDiv}>{footerText}</Text>
        </View>
    </>
)

const styles = EStyleSheet.create({
    headerDiv: {
        fontSize: 30,
        marginTop: 300,
        textAlign: 'center'
    }
})

export default FooterDiv;