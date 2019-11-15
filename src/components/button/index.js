import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';


export const Button = ({onPress, text, containerStyle}) => (
    <TouchableOpacity style={{...styles.containerStyle, ...containerStyle}} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 60,
        backgroundColor: "#FFF"
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#825eeb",
    }
});