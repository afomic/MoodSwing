import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    ActivityIndicator
} from "react-native"
import AutoResponsive from "autoresponsive-react-native"
import Toolbar from "../../components/toolbar/Toolbar";
import {MoodItem} from "../../components/moodItem";
import {getEmojis} from "../../service/api";
import {getResponsiveWidth} from "../../utils/ResponsiveScale";




const SCREEN_WIDTH = Dimensions.get('window').width;

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: false
        }
        this.fetchEmojis = this.fetchEmojis.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.handleMoodSelected = this.handleMoodSelected.bind(this);
    }

    componentDidMount() {
        this.fetchEmojis()
    }

    async fetchEmojis() {
        this.setLoading(true);
        try {
            const emojis = await getEmojis();
            this.setState({
                data: emojis,
                loading: false
            })
        } catch (error) {
            this.setLoading(false)
        }

    }

    setLoading(isLoadin) {
        this.setState({
            loading: isLoadin
        })
    }


    getAutoResponsiveProps() {
        return {
            itemMargin: 8,
            containerWidth: SCREEN_WIDTH - 40,
        };
    }

    renderChildren() {
        const moodStyles = [styles.big, styles.medium, styles.small];
        return this.state.data.map((item, key) => {
                return <MoodItem
                    item={item}
                    style={moodStyles[item.type]}
                    key={key}
                    onPress={() => this.handleMoodSelected(item)}
                />
            }
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    title={"How are you feeling?"}
                    iconTintColor={"#FFF"}
                    onBackPress={() => {
                    }}
                />
                {this.state.loading &&
                <View style={styles.progressContainer}>
                    <ActivityIndicator size={"large"} color={"#FFF"}/>

                </View>}
                <View style={styles.childContainer}>
                    <ScrollView>
                        <AutoResponsive {...this.getAutoResponsiveProps()}>
                            {this.renderChildren()}
                        </AutoResponsive>
                    </ScrollView>
                </View>

            </View>
        );
    }

    handleMoodSelected(mood) {
        this.props.navigation.navigate("MoodScale", {mood: mood})
    }
}
const styles = StyleSheet.create({
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
        width: getResponsiveWidth(90),
        height: getResponsiveWidth(90),
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: getResponsiveWidth(45),
    },
    medium: {
        width: getResponsiveWidth(80),
        height: getResponsiveWidth(80),
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: getResponsiveWidth(40),
    },
    small: {
        width: getResponsiveWidth(70),
        height: getResponsiveWidth(70),
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: getResponsiveWidth(35),
    },
    progressContainer: {
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    childContainer: {
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default HomeScreen;