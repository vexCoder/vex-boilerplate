import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Counter } from './components/Counter';
import { Todo } from './components/Todo';
import { Routes } from './utils/config';

interface RouterProps {}

export const Router: React.FC<RouterProps> = ({}) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={Routes.Counter} component={Counter} />
        <Route path={Routes.Task} component={Todo} />
      </Switch>
    </HashRouter>
  );
};
