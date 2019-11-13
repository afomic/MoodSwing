import React from "react"
import {View, StyleSheet, Text, TouchableOpacity} from "react-native"
import Emoji from "react-native-emoji";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    text: {
        textAlign: 'center',
        fontSize: 11,
        marginTop: 4,
        color: '#FFF',
    }
});

export const MoodItem = ({item, style, key}) => (
    <TouchableOpacity style={style} key={key}>
        <View style={styles.container}>
            <Emoji name={item.emoji} style={{fontSize: 20}}/>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    </TouchableOpacity>
);