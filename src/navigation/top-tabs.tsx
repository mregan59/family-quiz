import React from 'react';
import {
    TabBar,
    TabView,
    Tab,
    Divider,
    TabElement,
} from '@ui-kitten/components';
import {
    SafeAreaLayout,
    SaveAreaInset,
    SafeAreaLayoutElement,
} from './safe-area-layout';
import { Toolbar } from '../components/toolbar';

export const TopTabs = (props): SafeAreaLayoutElement => {
    const onTabSelect = (index: number): void => {
        const selectedTabRoute: string = props.state.routeNames[index];
        props.navigation.navigate(selectedTabRoute);
    };

    const createNavigationTabForRoute = (route): TabElement => {
        const { options } = props.descriptors[route.key];
        return (
            <Tab
                key={route.key}
                // title={options.title}
                icon={options.tabBarIcon}
            />
        );
    };

    return (
        <SafeAreaLayout insets={SaveAreaInset.TOP}>
            {/* <Toolbar title="React Navigation Ex 🐱" /> */}
            <TabView
                tabBarStyle={{ height: 56 }}
                indicatorStyle={{ height: 0 }}
                selectedIndex={props.state.index}
                onSelect={onTabSelect}
            >
                {props.state.routes.map(createNavigationTabForRoute)}
            </TabView>
            <Divider />
        </SafeAreaLayout>
    );
};
