const {contextBridge, ipcRenderer, ipcMain} = require('electron')

contextBridge.exposeInMainWorld('nav', {
    voltar: () =>ipcRenderer.send('voltar')
})