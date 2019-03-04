const {
    app,
    globalShortcut,
    BrowserWindow
} = require('electron')

const path = require('path')
const url = require('url')
var fs = require('fs');

function createWindow() {
    mainWindow = new BrowserWindow()

    //   fs.readFile("config.json", "utf8", function (error, data) {
    //     if (error) {
    //       alert("读取配置文件失败请联系软件开发人员")
    //       window.close();
    //       console.log(error)
    //     } else {
    //       var json = JSON.parse(data);
    //         
    //     }})

    mainWindow.setFullScreen(true);   
    const argv = process.argv.slice(2)


    // 对createWindow 函数中的内容进行修改
    //判断是否是开发模式
    if (argv && argv[1] == 'dev') {
        mainWindow.loadURL("http://localhost:3000/")
    }else{
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, './build/index.html'),
            protocol: 'file:',
            slashes: true
        }))
    }

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}


app.on('ready', createWindow)


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})
app.on('will-quit', function () {
    globalShortcut.unregisterAll()
})