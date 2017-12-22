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
			<div key={index} className='row-wrapper'>
				<div className='row-wrapper-question'>{question.query}</div>
				<div className='your-answer'>{get(question, `answerArr[${question.userSelected.answerIndex}]`, '')}</div>
				<div className='correct-answer'>{question.answerArr[question.correct.answerIndex]}</div>
			</div>
		)
	}

	getTotalScore = (scoreValuePath) => {
		return this.props.questions.reduce((total, q) => total + get(q, scoreValuePath, 0), 0);
	}

	render() {
		return (
			<div className='score'>
				<p className='score-text'>You scored {this.getTotalScore('userSelected.scoreValue')} out of {this.getTotalScore('correct.scoreValue')} on this assessment</p>
				<p className='score-text-alt'>Compare your answers with the correct answers below</p>
				<div className='answer-wrapper'>
					<div className='row-wrapper'>
						<div className='row-wrapper-question header'>Question</div>
						<div className='your-answer header'>Your Answer</div>
						<div className='correct-answer header'>Correct Answer</div>
					</div>
					{this.props.questions.map((question, index) => this.getRowDetails(question, index))}
				</div>
			</div>
		)
	}
};

export default Score;
