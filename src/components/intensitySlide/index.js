import React from "react"
import {View, StyleSheet} from "react-native"
import Slider from "react-native-slider";
import {IntensityValue} from "./components/IntensityValue";
import {IntensityTitle} from "./components/intensityTitle";

export const IntensitySlider = ({onMoodIntensityChange, currentIntensity, intensityList, containerStyle}) => (
    <View style={{...styles.container, ...containerStyle}}>
        <View style={styles.valueContainer}>
            {showIntensityValue(intensityList, currentIntensity)}
        </View>

        <Slider
            style={styles.sliderContainer}
            minimumValue={0}
            maximumValue={intensityList.length - 1}
            step={1}
            thumbStyle={styles.thumbStyle}
            minimumTrackTintColor="#825eeb"
            maximumTrackTintColor="#825eeb"
            onValueChange={onMoodIntensityChange}
        />
        <View style={styles.titleContainer}>
            {showIntensityTitle(intensityList, currentIntensity)}
        </View>

    </View>);

const showIntensityValue = (intensityList, currentIntensity) => {
    const step = 100 / (intensityList.length - 1);
    return intensityList.map((intensity, index) =>
        <IntensityValue
            title={(step * index) + "%"}
            selected={currentIntensity === index}
        />
    )
}
const showIntensityTitle = (intensityList, currentIntensity) => {
    return intensityList.map((intensity, index) =>
        <IntensityTitle
            title={intensity}
            selected={currentIntensity === index}
        />
    )
}


const styles = StyleSheet.create({
    container: {},
    sliderContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    titleContainer: {
        flexDirection: "row",
    },
    valueContainer: {
        flexDirection: "row",
    },
    thumbStyle: {
        backgroundColor: "#FFF",
        height: 45,
        width: 45,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }
});