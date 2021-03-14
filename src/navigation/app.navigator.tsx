import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { Home } from '../screens/home';
import { QuizScreen } from '../screens/quiz';
import { Account } from '../screens/account';
import { Settings } from '../screens/settings';
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
    [AppRoute.HOME]: undefined;
    [AppRoute.SETTINGS]: undefined;
    [AppRoute.ACCOUNT]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
    props: Partial<StackNavigatorProps>
): React.ReactElement => (
    <Stack.Navigator {...props} headerMode="none">
        <Stack.Screen name={AppRoute.HOME} component={QuizScreen} />
        <Stack.Screen name={AppRoute.SETTINGS} component={Settings} />
        <Stack.Screen name={AppRoute.ACCOUNT} component={Account} />
    </Stack.Navigator>
);
