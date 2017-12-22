import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = (props) => {
  return (
    <div className='errorContainer'>
      <h1 className='error404'>404</h1>
      <p className='errorReturn'>Take me back to the <Link to='/' className='errorReturnLink'>Home page</Link></p>
    </div>
  )
}

export default NoMatch;
