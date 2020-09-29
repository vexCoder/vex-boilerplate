import React, { Suspense } from 'react';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { TaskState } from '../../data/globalState';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    gap: '10px',
  },
  item: {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
}));

interface TodoProps {}

const Todo: React.FC<TodoProps> = ({}) => {
  const history = useHistory();
  const classes = useStyles();

  const [task, setTask] = useRecoilState(TaskState);
  const [desc, setdesc] = React.useState('');

  const handleRemoveTask = (id) => {
    setTask(_.filter(task, (v) => v.id !== id));
  };

  const handleAddTask = (description) => {
    setTask((prev) => [...prev, { id: prev.length, description }]);
    setdesc('');
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6">Tasks</Typography>
      {task &&
        task.map((v, i) => (
          <div key={i} className={classes.item}>
            <Typography variant="caption">{`- ${v.description}`}</Typography>
            <Button onClick={() => handleRemoveTask(v.id)}>Remove</Button>
          </div>
        ))}
      <TextField
        variant="outlined"
        value={desc}
        label="Input Task"
        onChange={(evt) => setdesc(evt.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleAddTask(desc)}
      >
        Add Task
      </Button>
    </div>
  );
};

export default Todo;
