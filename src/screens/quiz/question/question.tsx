import React from 'react'
import { View, Alert, TouchableOpacity } from 'react-native'
import { Question as QuestionModel } from "../../../models/question"
import { Button, Layout, RadioGroup, Radio } from "@ui-kitten/components"
import { Text } from "../../../components"
import { observer } from "mobx-react-lite"

export interface QuestionProps {
    question: QuestionModel
}

export interface QuestionPropsState {
}


export const Question: React.FC<QuestionProps> = observer(({ question }) => {
    const onPressAnswer = (index: number) => {
        const guess = question.allAnswers[index];
        console.log(guess);
        question.setGuess(guess)
    }

    const checkAnswer = () => {
        console.log(question.isCorrect)
        if (question.isCorrect) {
            Alert.alert("That is correct!")
        } else {
            console.log('i am here')
            Alert.alert(`Wrong! The correct answer is: ${question.correctAnswer}`)
        }
    }

    return (
        <Layout>
            <Text text={question.question} />
            <RadioGroup
                onChange={onPressAnswer}
                selectedIndex={question.allAnswers.indexOf(question.guess)}
            >
                {question.allAnswers.map((answer: string) => {
                    return <Radio>{answer}</Radio>
                })}
            </RadioGroup>
            <Button
                onPress={checkAnswer}
            >Check Answer!</Button>
        </Layout>
    )

});
