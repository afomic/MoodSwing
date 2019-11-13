'use strict';
import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions
} from "react-native"
import AutoResponsive from "autoresponsive-react-native"
import Toolbar from "../../components/toolbar/Toolbar";
import {MoodItem} from "../../components/moodItem";


let styles = StyleSheet.create({
    container: {
        backgroundColor: '#825eeb',
        flex: 1,
    },
    title: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    titleText: {
        color: '#d0bbab',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 4,
        color: '#FFF',
    },
    big: {
        width: 90,
        height: 90,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 45,
    },
    medium: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 40,
    },
    small: {
        width: 70,
        height: 70,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 35,
    },
});

const SCREEN_WIDTH = Dimensions.get('window').width;
let isbigStyle = true;

class HomeScreen extends React.Component {
    state = {
        array: [
            {emoji: ":rage:", title: "Anger"},
            {emoji: ":nerd_face:", title: "Cool"},
            {emoji: ":astonished:", title: "Suprised"},
            {emoji: ":sob:", title: "Sad"},
            {emoji: ":grimacing:", title: "Happy"},
            {emoji: ":weary:", title: "Tired"},
            {emoji: ":disappointed:", title: "down"},
            {emoji: ":sob:", title: "Sad"},
            {emoji: ":grimacing:", title: "Happy"},
            {emoji: ":weary:", title: "Tired"},
            {emoji: ":disappointed:", title: "down"},
            {emoji: ":disappointed:", title: "down"},
            {emoji: ":rage:", title: "Anger"},
            {emoji: ":nerd_face:", title: "Cool"},
            {emoji: ":astonished:", title: "Suprised"},
            {emoji: ":sob:", title: "Sad"},
            {emoji: ":grimacing:", title: "Happy"},
            {emoji: ":weary:", title: "Tired"},
            {emoji: ":disappointed:", title: "down"},
            {emoji: ":sob:", title: "Sad"},
            {emoji: ":grimacing:", title: "Happy"},
            {emoji: ":weary:", title: "Tired"},
            {emoji: ":disappointed:", title: "down"},
            {emoji: ":grimacing:", title: "Happy"},
            {emoji: ":weary:", title: "Tired"},
            {emoji: ":disappointed:", title: "down"},
            {emoji: ":disappointed:", title: "down"},
            {emoji: ":rage:", title: "Anger"},
        ]
    }


    getAutoResponsiveProps() {
        return {
            itemMargin: 8,
            containerWidth: SCREEN_WIDTH-40,
        };
    }

    renderChildren() {
        const moodStyles = [styles.big, styles.small, styles.medium];

        return this.state.array.map((item, key) => {
                const randomIndex = Math.floor(Math.random() * 3);
                return <MoodItem
                    item={item}
                    style={moodStyles[randomIndex]}
                    key={key}/>
            }
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    title={"How are you feeling?"}
                    onBackPressed={() => {
                    }}
                />
                <View style={{paddingLeft: 20, paddingRight: 20}}>
                    <ScrollView>
                        <AutoResponsive {...this.getAutoResponsiveProps()}>
                            {this.renderChildren()}
                        </AutoResponsive>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

export default HomeScreen;