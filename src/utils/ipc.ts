import electron from 'electron';

const { ipcRenderer } = electron;

export const isDev = ipcRenderer.sendSync('check-env');
