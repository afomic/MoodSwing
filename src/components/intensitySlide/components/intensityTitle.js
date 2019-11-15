import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';


export const IntensityTitle = ({title, selected}) => {
    const positionValue = new Animated.Value(0);
    if (selected) {
        Animated.parallel([
            Animated.timing(positionValue, {
                toValue: 20,
                duration: 40,
                useNativeDriver: true
            })
        ]).start();
    } else {
        Animated.parallel([
            Animated.timing(positionValue, {
                toValue: 0,
                duration: 40,
                useNativeDriver: true
            }),
        ]).start();
    }
    return <View style={styles.container}>
        <Animated.Text style={{
            color: "#FFF",
            textAlign: "center",
            transform: [{translateY: positionValue}]
        }}>{title}</Animated.Text>
    </View>
};
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    line: {
        width: 2,
        height: 15,
        backgroundColor: "#7f868e"
    },
})