import React from 'react';
import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core';
import { Router } from './Router';
import Provider from './data/Provider';
import { isDev } from './utils/ipc';

const useStyles = makeStyles(() => ({
  root: {},
}));

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const classes = useStyles();
  return (
    <Provider>
      <div className={classes.root}>
        <Router />
      </div>
    </Provider>
  );
};

export default isDev ? hot(App) : App;
