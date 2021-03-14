import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Layout,
    TopNavigationAction,
    Button,
} from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { AppRoute } from '../../navigation/app-routes';
import { SettingsIcon, PersonIcon } from '../../assets/icons';
import { FlexBox, Spacer, Text } from '../../components';
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack';


export const Home = ({ eva, navigation }) => {
    const themedStyle = eva.style;

    const navigateToSettings = () => {
        navigation.navigate(AppRoute.SETTINGS);
    }

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                tabPadding
                showTitle={true}
            >
                <Layout level="1" style={themedStyle.container}>
                    <FlexBox row aligncenter justifybetween>
                        <Text tx="homeScreen.main"></Text>
                        <Button onPress={navigateToSettings}>Navigate</Button>
                    </FlexBox>
                </Layout>
            </MainLayout>
        </View>
    );
};

