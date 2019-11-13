import {
    Animated,
    Easing
} from 'react-native';

export const navigationConfiguration = {
    headerMode: "none",
    transitionConfig: () => ({
        transitionSpec: {
            duration: 400,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { position, layout, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                outputRange: [width, 0, 0]
            })

            const slideFromRight = { transform: [{ translateX }] }

            return slideFromRight
        }
    }),
    cardStyle: {
        opacity: 1
    },

}

