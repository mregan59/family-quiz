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

export const Settings = props => {
    const { eva } = props;
    const themedStyle = eva.style;



    const navigateToAccount = () => {
        props.navigation.navigate(AppRoute.ACCOUNT);
    }

    const rightControl = () => {
        return (<TopNavigationAction icon={PersonIcon} onPress={navigateToAccount} />);
    };


    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                showBack
                tabPadding
                showTitle={true}
                rightControl={rightControl}
                {...props}
            >
                <Layout level="1" style={themedStyle.container}>
                    <FlexBox row aligncenter justifybetween>
                        <Text tx="settingsScreen.main"></Text>
                    </FlexBox>
                </Layout>
            </MainLayout>
        </View>
    );
};

