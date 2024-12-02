import { app, BrowserWindow, clipboard, ipcMain } from "electron";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  win.loadURL("http://localhost:5174");
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
ipcMain.handle("clipboard-read-content", async () => {
  try {
    const image = clipboard.readImage();
    if (!image.isEmpty()) {
      const imageData = image.toDataURL();
      if (imageData) {
        return imageData;
      }
    }
    const text = clipboard.readText();
    if (text) {
      return text;
    }
  } catch (e) {
    console.error(e);
  }
});
