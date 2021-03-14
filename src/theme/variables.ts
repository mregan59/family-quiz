import { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export const spacing = (num: number) => {
    return num * 8;
};

export const variables = {
    sideMargin: spacing(2),
    cardMargin: spacing(2),
    borderRadius1: 5,
    borderRadius2: 10,
    borderRadius3: 30,
    borderRadiusRound: 50,
};

export const dimensions = {
    innerWidth: width - variables.sideMargin * 2,
    fullWidth: width,
    height: height,
};
