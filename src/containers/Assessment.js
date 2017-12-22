import { connect } from 'react-redux';
import pick from 'lodash/pick';
import { setAnswer, selectQuestion } from './../actions/assessment';
import Assessment from '../components/assessment';

const mapStateToProps = state => {
	const { activeQuestionIndex, questions } = state.assessment;
	const	activeQuestion = questions[activeQuestionIndex];

	return {
		totalQuestions: questions.length,
		questionIndex: activeQuestionIndex,
		question: {
			...pick(activeQuestion, 'answerArr', 'query'),
			answer: activeQuestion.answerArr[activeQuestion.userSelected.answerIndex],
		}
	};
}

const mapDispatchToProps = {
	onAnswer: setAnswer,
	onUpdateQuestion: selectQuestion,
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)
