import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './welcome';
import Assessment from './../containers/Assessment';
import Result from './../containers/AssessmentScore';
import NoMatch from './noMatch';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' render={(props) => (<Welcome {...props} />)} />
      <Route exact path='/assessment' render={(props) => (<Assessment {...props} />)} />
      <Route exact path='/assessment/score' render={(props) => (<Result {...props} />)} />
      <Route render={(props) => (<NoMatch {...props} />)} />
    </Switch>
  )
}

export default Routes;
