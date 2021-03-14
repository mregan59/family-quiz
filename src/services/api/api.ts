import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import { getGeneralApiProblem } from './api-problem';
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config';
import * as Types from './api.types';
import { QuestionSnapshot } from '../../models/question';
import uuid from 'react-native-uuid';

/**
 * Manages all requests to the API.
 */

const API_PAGE_SIZE = 50;

const convertQuestion = (raw: any): QuestionSnapshot => {
    const id = uuid.v1();
    return {
        id: id,
        category: raw.category,
        type: raw.type,
        difficulty: raw.difficulty,
        question: raw.question,
        correctAnswer: raw.correct_answer,
        incorrectAnswers: raw.incorrect_answers,
    };
};
export class Api {
    /**
     * The underlying apisauce instance which performs the requests.
     */
    apisauce: ApisauceInstance;

    /**
     * Configurable options.
     */
    config: ApiConfig;

    /**
     * Creates the api.
     *
     * @param config The configuration to use.
     */
    constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
        this.config = config;
    }

    /**
     * Sets up the API.  This will be called during the bootup
     * sequence and will happen before the first React component
     * is mounted.
     *
     * Be as quick as possible in here.
     */
    setup() {
        // construct the apisauce instance
        this.apisauce = create({
            baseURL: this.config.url,
            timeout: this.config.timeout,
            headers: {
                Accept: 'application/json',
            },
        });
    }

    async getQuestions(): Promise<Types.GetQuestionsResult> {
        // make the api call
        const response: ApiResponse<any> = await this.apisauce.get('', {
            amount: API_PAGE_SIZE,
        });

        // the typical ways to die when calling an api
        if (!response.ok) {
            const problem = getGeneralApiProblem(response);
            if (problem) return problem;
        }

        // transform the data into the format we are expecting
        try {
            const rawQuestions = response.data.results;
            const convertedQuestions: QuestionSnapshot[] = rawQuestions.map(
                convertQuestion
            );
            return { kind: 'ok', questions: convertedQuestions };
        } catch (e) {
            //  __DEV__ && console.tron.log(e.message);
            __DEV__ && console.log(e.message);
            return { kind: 'bad-data' };
        }
    }
}