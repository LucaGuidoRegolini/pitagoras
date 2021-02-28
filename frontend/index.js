const {app, BrowserWindow} = require("electron")
//import icon from './src/img/triangulo-retangulo.png'

function createWindow() {
    const window = new BrowserWindow({height: 680, icon:'./resources/app/src/imgsrc/triangulo.png'})
    window.loadURL("http://localhost:3000")
    window.setMenu(null)
}

app.on("ready", createWindow)