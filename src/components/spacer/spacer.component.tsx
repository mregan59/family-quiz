import React from 'react';
import { View } from 'react-native';
import { spacing } from '../../theme/variables';

export const Spacer = props => {
    return (
        <View
            style={{
                height: spacing(props.height),
                width: spacing(props.width),
            }}
        ></View>
    );
};

Spacer.defaultProps = {
    width: 0,
    height: 0,
};
