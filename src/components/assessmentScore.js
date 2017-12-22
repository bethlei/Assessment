import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

class Score extends Component{
	static propTypes = {
		questions: PropTypes.arrayOf(
			PropTypes.shape({
				query: PropTypes.string,
				answerArr: PropTypes.array,
				correct: PropTypes.shape({
					answerIndex: PropTypes.nunber,
					scoreValue: PropTypes.number,
				}),
				userSelected: PropTypes.shape({
					answerIndex: PropTypes.nunber,
					scoreValue: PropTypes.number,
				})
			})).isRequired,
		clearAnswers: PropTypes.func.isRequired,
	}

	static defaultProps = {
		clearAnswers: () => ({}),
	}

	getRowDetails = (question, index) => {
		return (
			<div key={index}>
				<div>{question.query}</div>
				<div>{get(question, `answerArr[${question.userSelected.answerIndex}]`, '')}</div>
				<div>{question.answerArr[question.correct.answerIndex]}</div>
			</div>
		)
	}

	getTotalScore = (scoreValuePath) => {
		return this.props.questions.reduce((total, q) => total + get(q, scoreValuePath, 0), 0);
	}

	render() {
		return (
			<div className='score'>
				<p>You scored {this.getTotalScore('userSelected.scoreValue')} out of {this.getTotalScore('correct.scoreValue')} on this assessment.</p>
				<p>Compare your answers with the correct answers below.</p>
				<div>
					<div>
						<div>Question</div>
						<div>Your Answer</div>
						<div>Correct Answer</div>
					</div>
					{this.props.questions.map((question, index) => this.getRowDetails(question, index))}
				</div>
			</div>
		)
	}
};

export default Score;
