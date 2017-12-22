import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <div className='welcome'>
      <h1 className='welcome-header'>Welcome to the GS Assessment</h1>
      <p>Each question has different score value depending on the question level of difficulty.</p>
      <div><Link to='/assessment' className='link'>Click here</Link> to begin the assessment</div>
    </div>
  )
}

export default Welcome;
