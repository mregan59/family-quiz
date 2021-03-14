import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, FlatList, Alert, TouchableOpacity } from "react-native"
import { Button, Layout, RadioGroup, Radio } from "@ui-kitten/components"
import { Text } from "../../components"
import { useStores } from "../../models"
import { QuestionStore } from "../../models/question-store"
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native"
import { Question as QuestionModel } from "../../models/question"
import { MainLayout } from '../../layout';
import { Question } from './question'
import { AppRoute } from "../../navigation/app-routes"

export interface QuizScreenProps extends NavigatorScreenParams<{}> {
    questionStore: QuestionStore
}

export interface QuizScreenState {
    refreshing: boolean
}


export const QuizScreen = observer(function QuizScreen() {
    // Pull in one of our MST stores
    const { questionStore } = useStores()
    const [refreshing, setRefreshing] = useState(false)
    // Pull in navigation via hook
    const navigation = useNavigation()

    useEffect(() => {
        fetchQuestions()

    }, [])

    const goToSettings = () => {
        navigation.navigate(AppRoute.SETTINGS);
    }

    const fetchQuestions = async () => {
        setRefreshing(true);
        await questionStore.getQuestions()
        setRefreshing(false);
    }




    const renderQuestion = ({ item }: { item: QuestionModel }) => {
        return (
            <Question question={item}></Question>

        )
    }

    const { questions } = questionStore

    return (
        <View>
            <MainLayout
                safeArea={true}
                showBack
                tabPadding
                showTitle={true}
            >
                <Button onPress={goToSettings}>Go To Settings</Button>
                <View>
                    <Text preset="header" tx="questionScreen.header" />
                </View>
                <FlatList
                    data={questionStore.questions}
                    renderItem={renderQuestion}
                    extraData={{ extraDataForMobX: questions.length > 0 ? questions[0].question : "" }}
                    keyExtractor={item => item.id}
                    onRefresh={fetchQuestions}
                    refreshing={refreshing}
                />
            </MainLayout>
        </View>
    )

})
