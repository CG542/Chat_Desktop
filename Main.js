
const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;


var win;

function createWindow() {

  win = new BrowserWindow({ width: 400, height: 600 });

  win.loadURL(`file://${__dirname}/app/gui/Login.html`);

  // Open the DevTools.
  win.webContents.openDevTools();

  win.setMenuBarVisibility(false);

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }

});


const ipc = electron.ipcMain;
ipc.on('login-success', function () {

  win.hide();
  win=null;
  
  win = new BrowserWindow({ width: 800, height: 600 });
  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/app/gui/Frame.html`);

    // Open the DevTools.
    //win.webContents.openDevTools();

  win.setMenuBarVisibility(false);

    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    app.quit();
});

});

