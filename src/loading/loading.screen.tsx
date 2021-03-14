import React, { useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    StatusBar,
} from 'react-native';

export const Loading: any = props => {
    return (
        <View>
            <ActivityIndicator />
            <Text>Loading Noow</Text>
            <StatusBar barStyle="default" />
        </View>
    );
};
