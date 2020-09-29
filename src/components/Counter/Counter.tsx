import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { CounterState } from '../../data/globalState';
import { Routes } from '../../utils/config';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
  },
  counter: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  control: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.3em',
    marginTop: '1em',
    padding: '0.5em',
    width: 'auto',
  },
}));

interface CounterProps {}

const Counter: React.FC<CounterProps> = ({}) => {
  const history = useHistory();
  const [count, setCount] = useRecoilState(CounterState);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.counter}>
        <Typography variant="h4">Counter</Typography>
        <Typography variant="h2">{count}</Typography>
        <div className={classes.control}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Add
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setCount(0)}
          >
            0
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setCount((prev) => prev - 1)}
          >
            Sub
          </Button>
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.push(Routes.Task)}
        >
          Go To Counter Process!
        </Button>
      </div>
    </div>
  );
};

export default Counter;
