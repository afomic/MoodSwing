import {Dimensions} from 'react-native';

const baseWidth = 410;
const baseHeight = 730;

const maxHeightScale = 1.1;

let heightScale = Dimensions.get('window').height / baseHeight;
let fontScale = Dimensions.get('window').width / 400;

if (heightScale > maxHeightScale) {
    heightScale = maxHeightScale;
}
const widthScale = Dimensions.get('window').width / baseWidth;

export const getResponsiveHeight = (height) => height * heightScale;

export const getResponsiveWidth = (width) => width * widthScale;

export const getResponsiveFont = (fontSize) => fontSize * fontScale;