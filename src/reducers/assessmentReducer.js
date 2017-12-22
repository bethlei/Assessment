import actionTypes from './../actions/types';
import questions from './../data/questions';
import cloneDeep from 'lodash/cloneDeep';

export const defaultState = {
  questions,
  activeQuestionIndex: 0,
}

const setAnswer = (state, answer) => {
	let { questions } = state,
	    { answerArr, correct } = questions[state.activeQuestionIndex];
	const answerIndex = answerArr.indexOf(answer),
		    scoreValue = correct.answerIndex !== answerIndex
					? defaultState.questions[state.activeQuestionIndex].userSelected.scoreValue
					: correct.scoreValue;
	questions[state.activeQuestionIndex].userSelected = { answerIndex, scoreValue };
	return {
    ...state,
    questions,
  }
}

const	selectQuestion = (state, index) => {
	if(index !== state.activeQuestionIndex && index > -1 && index < state.questions.length) {
		return {
      ...state,
      activeQuestionIndex: index,
    };
	}
	return state;
}

const resetAnswers = () => cloneDeep(defaultState);

function assessment(state = resetAnswers(), action){
	switch(action.type) {
		case actionTypes.QUESTION.ANSWER:
      return setAnswer(state, action.answer);

		case actionTypes.QUESTION.SELECT:
      return selectQuestion(state, action.questionIndex);

		case actionTypes.ANSWERS.RESET:
      return resetAnswers();

    default:
      return state;
	}
}

export default assessment;
