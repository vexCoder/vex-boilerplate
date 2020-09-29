import { atom } from 'recoil';
export const CounterState = atom<number>({
  key: 'atom',
  default: 0,
});

interface Task {
  id?: number;
  description: string;
}

export const TaskState = atom<Task[]>({
  key: 'task',
  default: [],
});
