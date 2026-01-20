const {app, ipcMain, BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

async function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'splash', 'icon', 'logo.ico'),
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    })

    await mainWindow.loadFile(path.join(__dirname, './view/home.html'))
    server = require('./db/server')

    
    mainWindow.setMenuBarVisibility(false)
}

app.whenReady().then(createMainWindow)

ipcMain.on('voltar', () =>{
    const janela = BrowserWindow.getFocusedWindow()
    if (janela && janela.webContents.navigationHistory.canGoBack()){
        janela.webContents.navigationHistory.goBack()
    }
})

ipcMain.on('fechar', () => app.quit())

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin') app.quit()
})