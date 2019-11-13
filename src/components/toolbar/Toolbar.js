import React from "react"
import {View, StyleSheet, Image, Text} from "react-native"
import Constants from 'expo-constants';

const backIcon = require("../../../assets/ic_back.png")

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: Constants.statusBarHeight,
        margin: 20,
        flexDirection: "row",
    },
    titleText: {
        color: "#FFF",
        flex: 1,
        fontWeight: "bold",
        textAlign: "center"
    },
    backIcon: {
        height: 24,
        width: 24

    }
})

export default Toolbar = (props) => (
    <View style={styles.container}>
        <Image style={styles.backIcon} source={backIcon}/>
        <Text style={styles.titleText}>{props.title}</Text>
    </View>)