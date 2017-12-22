import { connect } from 'react-redux';
import { resetAnswers } from './../actions/assessment';
import Score from '../components/assessmentScore';

const mapStateToProps = state => ({
	questions: state.assessment.questions,
})

export default connect(mapStateToProps, {clearAnswers: resetAnswers})(Score);
