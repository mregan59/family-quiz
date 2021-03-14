import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AppRoute } from './app-routes';
import { Home } from '../screens/home';
import { Settings } from '../screens/settings';
import { SettingsIcon, HomeIcon, OrderIcon } from '../assets/icons';

import { TopTabs } from './top-tabs';

const TopTab = createMaterialTopTabNavigator();

export const MainTopNavigator = (): React.ReactElement => (
    <TopTab.Navigator
        swipeEnabled={false}
        tabBar={props => <TopTabs {...props} />}
    >
        <TopTab.Screen
            name={AppRoute.HOME}
            component={Home}
            options={{ title: 'Home', tabBarIcon: HomeIcon }}
        />
        <TopTab.Screen
            name={AppRoute.SETTINGS}
            component={Settings}
            options={{ title: 'Settings', tabBarIcon: SettingsIcon }}
        />
    </TopTab.Navigator>
);
