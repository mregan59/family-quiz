import React, { Fragment } from 'react';
import { TouchableOpacity, Platform, View } from 'react-native';
import {
    Layout,
    Divider,
    Icon,
    Text,
    TopNavigation,
    Button,
    TopNavigationAction,
} from '@ui-kitten/components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
    SafeAreaLayout,
    SaveAreaInset,
    SafeAreaLayoutElement,
} from '../navigation/safe-area-layout';
import { variables } from '../theme/variables';
import { BackIcon } from '../assets/icons';
import { useRoute } from '@react-navigation/native';

export const MainLayout = props => {
    const statusBarHeight = getStatusBarHeight();
    const route = useRoute();
    const navigateBack = () => {
        if (props.onBack) {
            props.onBack()
        } else {
            props.navigation.goBack();
        }

    };
    //TODO hook up navigation options
    // const { options } = scene.descriptor;
    // const title =
    //     options.headerTitle !== undefined
    //         ? options.headerTitle
    //         : options.title !== undefined
    //         ? options.title
    //         : scene.route.routeName;

    const BackButton = (props) => {
        return (<TopNavigationAction icon={BackIcon} onPress={navigateBack} />);
    };
    const header = () => {
        return (
            <React.Fragment>
                <TopNavigation
                    title={props.showTitle && (props.title || route.name)}
                    alignment="center"
                    accessoryLeft={(props.showBack && (() => <BackButton />)) || (props.leftControl ? props.leftControl : null)}
                    accessoryRight={props.rightControl ? props.rightControl : null}
                />
                {props.showTitle && <Divider />}
            </React.Fragment>
        );
    };

    //TODO figure out way around tabPAdding


    if (props.safeArea) {
        const insets = props.tabPadding
            ? [SaveAreaInset.TOP, SaveAreaInset.BOTTOM, SaveAreaInset.TABS]
            : [SaveAreaInset.TOP, SaveAreaInset.BOTTOM]
        return (
            <SafeAreaLayout insets={insets}>
                {props.showHeader && header()}
                <Layout
                    level={props.level}
                    style={{
                        height: '100%',
                        padding: props.padding ? variables.sideMargin : 0,
                    }}
                >
                    {props.children}
                </Layout>
            </SafeAreaLayout>
        );
    } else {
        return (
            <Layout
                style={{
                    flex: 1,
                }}
            >
                {props.showHeader && header()}
                <Layout
                    level={props.level}
                    style={{
                        height: '100%',
                        padding: props.padding ? 15 : 0,
                    }}
                >
                    {props.children}
                </Layout>
            </Layout>
        );
    }
};

MainLayout.defaultProps = {
    safeArea: true,
    level: '1',
    padding: true,
    showHeader: true,
    showTitle: true,
};
