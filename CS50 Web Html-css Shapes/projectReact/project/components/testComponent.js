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

const ManoKomponentas = ({ tekstas }) => {
    const [paspaudimuSkaicius, setPaspaudimas] = useState(0);

    useEffect(() => {
        // console.warn("Button was clicked");

    }, [paspaudimuSkaicius]);

    return (
        <>
            <TouchableOpacity onPress={() => setPaspaudimas(prevState => prevState+1)}>
                <Text style={styles.mainText}>{tekstas}</Text>
            </TouchableOpacity>
            <Text style={styles.clicksMade}>{paspaudimuSkaicius}</Text>
            <TouchableOpacity onPress={() => setPaspaudimas(prevState => prevState=0)}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = EStyleSheet.create({
    mainText: {
        marginTop: 10,
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 20,
        color: 'green',
        marginTop: 300
    },

    clicksMade: {
        textAlign: 'center',
        fontSize: 50,
        color: 'red',
    },
    resetText: {
        marginTop: 30,
        color: 'orange',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default ManoKomponentas;