import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';
import customTheme from './theme/dark-theme.json'; // <-- Import app theme

import { Loading } from './loading';
import customMapping from './theme/custom-mapping.json';

//NAVIGATORS
import { AppNavigator } from './navigation/app.navigator';
import { MainBottomNavigator } from './navigation/main-bottom.navigator';
import { MainTopNavigator } from './navigation/main-top.navigator';
import { AppRoute } from './navigation/app-routes';
import "./i18n"
//import "./utils/ignore-warnings"
import { RootStore, RootStoreProvider, setupRootStore } from "./models"
//import { initFonts } from "./theme/fonts" /πset/ expo

const theme = { ...eva.dark, ...customTheme };


function App() {
    const [initialRoute, setInitialRoute] = useState(AppRoute.HOME);
    const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

    // Kick off initial async loading actions, like loading fonts and RootStore
    useEffect(() => {
        (async () => {
            // await initFonts() // expo
            setupRootStore().then(setRootStore)
        })()
    }, [])

    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color. You can replace
    // with your own loading component if you wish.
    if (!rootStore) return null

    return (
        <RootStoreProvider value={rootStore}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                theme={theme}
            >
                <SafeAreaProvider>
                    {initialRoute ? (
                        <NavigationContainer>
                            <AppNavigator />
                        </NavigationContainer>
                    ) : (
                        <Loading></Loading>
                    )}
                </SafeAreaProvider>
            </ApplicationProvider>
        </RootStoreProvider>
    );
}

export default App;


