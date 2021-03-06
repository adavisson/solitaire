const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

const path = require('path')

let mainWindow //Global window object

const createWindow = () => {
  mainWindow = new BrowserWindow({height: 900, width: 1200, show: false})

  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`

  mainWindow.loadURL(startURL)

  mainWindow.once('ready-to-show', () => mainWindow.show())
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

//mac things
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
