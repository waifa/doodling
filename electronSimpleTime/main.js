const { BrowserWindow, app } = require("electron")

app.whenReady().then(() => {
    const myTime = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    }
    );

    myWindow.loadfile('index.html');
})