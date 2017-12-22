import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class Questionnaire extends Component {
	static propTypes = {
		query: PropTypes.string.isRequired,
		answerArr: PropTypes.array.isRequired,
		answer: PropTypes.any,
	}

	static defaultProps = {
		answer: '',
	}

	constructor(props) {
		super(props);
		this.state = {
			answer: this.props.answer
		};
	}

	componentWillReceiveProps(nextProps) {
		this.state.answer !== nextProps.answer && this.setAnswer(nextProps.answer);
	}

	setAnswer(answer) {
		this.setState({ answer });
	}

	getAnswerOptionButtons(answerOption, index) {
		return (
			<Button key={index}
			  bsStyle={this.state.answer === answerOption ? 'primary' : 'default'}
			  onClick={() => this.setAnswer(answerOption)}>
				{answerOption}
			</Button>
		)
	}

	render() {
		return (
			<div className='questionnaire'>
				<div className='question'>{this.props.query}</div>
				<ButtonGroup vertical block>
					{this.props.answerArr.map((answerOption, index) => this.getAnswerOptionButtons(answerOption, index))}
				</ButtonGroup>
			</div>
		)
	}
}
