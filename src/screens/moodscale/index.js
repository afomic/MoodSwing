import React, {Component} from "react"
import {View, StyleSheet, Text} from "react-native"
import Toolbar from "../../components/toolbar/Toolbar";
import Emoji from "react-native-emoji";
import {Button} from "../../components/button";
import {IntensitySlider} from "../../components/intensitySlide";
import Constants from 'expo-constants';

class MoodScaleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moodIntensity: 0
        };
        this.intensityTitles = ["Slightly", "A little", "Fairly", "Very", "Extremely"]
        this.handleBackPressed = this.handleBackPressed.bind(this);
        this.handleMoodIntensityChange = this.handleMoodIntensityChange.bind(this);
    }

    render() {
        const {mood} = this.props.navigation.state.params;
        const {moodIntensity} = this.state;
        return <View style={styles.container}>
            <Toolbar
                title={""}
                iconTintColor={"#825eeb"}
                onBackPress={this.handleBackPressed}
            />
            <View style={styles.topContainer}>
                <Emoji name={mood.emoji} style={styles.emoji}/>
                <Text style={styles.feelingText}>I'm feeling</Text>
                <Text style={styles.moodTitle}>{this.intensityTitles[moodIntensity]} {mood.title}</Text>
                <Text style={styles.descriptionText}>Choose the intensity of your feeling</Text>
            </View>

            <View
                style={styles.bottomContainer}
            >

                <Button
                    text={"NEXT"}
                    containerStyle={styles.button}
                />

            </View>
            <IntensitySlider
                intensityList={this.intensityTitles}
                onMoodIntensityChange={this.handleMoodIntensityChange}
                currentIntensity={moodIntensity}
                containerStyle={styles.sliderContainer}
            />

        </View>
    }

    handleBackPressed() {
        this.props.navigation.pop()
    }

    handleMoodIntensityChange(intensity) {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
            this.setState({
                moodIntensity: intensity
            })
        }, 30)


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        backgroundColor: "white",
        alignItems: "center",
        flex: 1,
    },
    bottomContainer: {
        backgroundColor: "#825eeb",
        paddingRight: 8,
        paddingLeft: 8,
        flex: 1
    },
    feelingText: {
        fontSize: 24,
    },
    moodTitle: {
        color: "#825eeb",
        fontSize: 24,
    },
    descriptionText: {
        color: "#7f868e",
        marginTop: 15
    },
    emoji: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 10
    },
    button: {
        position: "absolute",
        bottom: 20,
        left: 0,
        marginRight: 20,
        marginLeft: 20,
        right: 0,
        flex: 1,
    },
    sliderContainer: {
        bottom: 0,
        position: "absolute",
        justifyContent: "center",
        top: Constants.statusBarHeight + 80,
        left: 0,
        right: 0,
    }
})


export default MoodScaleScreen;