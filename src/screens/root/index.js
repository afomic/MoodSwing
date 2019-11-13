

import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { navigationConfiguration } from '../../utils/navigationTransition.js';

import HomeScreen from "../home";
import MoodScaleScreen from "../moodscale";


const PageStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        MoodScale: { screen: MoodScaleScreen },
    },
    { ...navigationConfiguration }
)


export default createAppContainer(PageStack);