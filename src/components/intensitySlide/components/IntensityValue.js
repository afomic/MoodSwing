import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';


export const IntensityValue = ({title, selected}) => {
    const positionValue = new Animated.Value(0);
    const fontScaleValue = new Animated.Value(0);
    const textColor = selected ? "#825eeb" : "rgba(201,201,201,0.8)";
    if (selected) {
        Animated.parallel([
            Animated.timing(positionValue, {
                toValue: -20,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(fontScaleValue, {
                toValue: 1.5,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();
    } else {
        Animated.parallel([
            Animated.timing(positionValue, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(fontScaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();
    }
    return <View style={styles.container}>
        <Animated.Text style={{
            color: textColor,
            fontWeight:"bold",
            textAlign:"center",
            transform: [{scale: fontScaleValue}, {translateY: positionValue}]
        }}>
            {title}</Animated.Text>
        {!selected && <View style={styles.line}/>}
    </View>
};
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:"center",
        flex:1,
    },
    line: {
        width: 2,
        height: 8,
        backgroundColor: "#7f868e"

    }
})