import React from 'react';
import {StyleSheet, StatusBar ,View} from 'react-native';
import Main from "./src/screens/root"

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar  barStyle="light-content"/>
            <Main/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
});
