import ActionTypes from './types'

export const setAnswer = (answer = '') => ({
	type: ActionTypes.QUESTION.ANSWER,
	answer
});

export const selectQuestion =  (questionIndex = 0)  => ({
	type: ActionTypes.QUESTION.SELECT,
	questionIndex
});

export const resetAnswers = () => ({
	type: ActionTypes.ANSWERS.RESET
});
