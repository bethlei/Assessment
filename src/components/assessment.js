import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Questionnaire from './questionnaire';

class Assessment extends Component {
	static propTypes = {
		totalQuestions: PropTypes.number.isRequired,
		questionIndex: PropTypes.number.isRequired,
		question: PropTypes.shape({
			query: PropTypes.string,
			answerArr: PropTypes.array,
			answer: PropTypes.any,
		}).isRequired,
		onAnswer: PropTypes.func,
		onUpdateQuestion: PropTypes.func,
		onSubmit:  PropTypes.func,
	}

	onUpdateQuestion( nextQuestionIndex ){
		this.props.onAnswer(this.questionnaire.state.answer);
		this.props.onUpdateQuestion(nextQuestionIndex);
	}

	onSubmit(){
		this.props.onAnswer(this.questionnaire.state.answer);
		this.props.onSubmit && this.props.onSubmit()
	}

	render(){
		const { questionIndex, totalQuestions } = this.props;
		const	buttonProps = {
  		onUpdateQuestion: this.onUpdateQuestion.bind(this),
  		onSubmit: this.onSubmit.bind( this ),
  		questionIndex,
  		totalQuestions
		};

		return (
			<div className='assessment'>
				<div>Step {this.props.questionIndex + 1} of {this.props.totalQuestions}</div>
				<Questionnaire ref={q => this.questionnaire = q}link{ ...this.props.question } />
				<div className='actions'>
					<BackButton { ...buttonProps } />
					<NextButton { ...buttonProps } />
				</div>
			</div>
		)
	}
}

const BackButton = ({onUpdateQuestion, questionIndex}) =>
	(questionIndex > 0)
		? <div className='dir back'><Button onClick={() => onUpdateQuestion( questionIndex - 1 )}>Previous</Button></div>
		: <div className='dir null'><span /></div>;


const NextButton = ({onUpdateQuestion, onSubmit, questionIndex, totalQuestions}) =>
	(questionIndex < totalQuestions - 1)
		? <div className='dir next'><Button onClick={() => onUpdateQuestion(questionIndex + 1)}>Next</Button></div>
		: <div className='dir submit'>
			  <Button><Link to='/assessment/score' onClick={onSubmit} className='link'>Submit Assessment</Link></Button>
			</div>;

export default Assessment
