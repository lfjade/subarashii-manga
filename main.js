const {app, ipcMain, BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

async function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    })

    await mainWindow.loadFile(path.join(__dirname, './view/home.html'))
}

app.whenReady().then(createMainWindow)

ipcMain.on('fechar', () => app.quit())

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin') app.quit()
})