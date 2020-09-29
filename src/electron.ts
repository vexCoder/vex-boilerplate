import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadURL(`file://${__dirname}/index.html`);
  }
};

app.whenReady().then(() => {
  createWindow();
  ipcMain.on('check-env', (evt) => (evt.returnValue = isDev));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
