import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Layout,
    TopNavigationAction,
    Button,
} from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { AppRoute } from '../../navigation/app-routes';
import { AccountIcon, PersonIcon } from '../../assets/icons';
import { FlexBox, Spacer, Text } from '../../components';

export const Account = props => {
    const { eva } = props;
    const themedStyle = eva.style;

    const navigateToAccount = () => {
        props.navigation.navigate(AppRoute.ACCOUNT);
    }

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                showBack
                tabPadding
                showTitle={true}
                {...props}
            >
                <Layout level="1" style={themedStyle.container}>
                    <FlexBox row aligncenter justifybetween>
                        <Text tx="accountScreen.main"></Text>
                        <Button onPress={navigateToAccount}>Navigate</Button>
                    </FlexBox>
                </Layout>
            </MainLayout>
        </View>
    );
};

