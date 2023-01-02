const { app, BrowserWindow } = require("electron");
const isDev = require('electron-is-dev');
const path = require("path");

const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width : 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // mainWindow.loadFile(path.join(__dirname, "index.html"));
  const url  = isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../index.html')}`;

  mainWindow.loadURL(url).catch((error) => {
    if (error.code === 'ERR_ABORTED') return;
    console.error(`Error loading URL:${url} ${error}`);
  });;

}

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    loadMainWindow();
  }
});
