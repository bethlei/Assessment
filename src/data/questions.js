const questions = [
  {
		query: 'A hexagon has how many sides?',
		answerArr: [ '8', '6', '5' ],
		correct: {
			answerIndex: 1,
			scoreValue: 3,
		},
		userSelected: {
			answerIndex: -1,
			scoreValue: 0,
		}
	},
  {
		query: '10 + 2 * 5',
		answerArr: [ '20', '60', '30' ],
		correct: {
			answerIndex: 0,
			scoreValue: 5,
		},
		userSelected: {
			answerIndex: -1,
			scoreValue: 0,
		}
	},
  {
		query: '5 % 2',
		answerArr: [ '0', '2', '1' ],
		correct: {
			answerIndex: 2,
			scoreValue: 2,
		},
		userSelected: {
			answerIndex: -1,
			scoreValue: 0,
		}
	},
  {
		query: 'square root of 9',
		answerArr: [ '81', '3', '1' ],
		correct: {
			answerIndex: 1,
			scoreValue: 2,
		},
		userSelected: {
			answerIndex: -1,
			scoreValue: 0,
		}
	},
];

export default questions;
